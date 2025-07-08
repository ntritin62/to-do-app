'use server';
import { loginSchema, registerSchema } from '@/schemas/authSchema';
import { prisma } from '@/lib/prisma';
import { hashPassword, comparePasswords, generateJWT } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
  const data = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
  };

  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, errors, values: data };
  }

  const user = await prisma.user.findUnique({
    where: { email: result.data.email },
  });

  if (!user) {
    return {
      success: false,
      errors: { email: ['Email not found'] },
      values: data,
    };
  }

  const match = await comparePasswords(result.data.password, user.password);
  if (!match) {
    return {
      success: false,
      errors: { password: ['Incorrect password'] },
      values: data,
    };
  }

  const token = generateJWT(user.id);

  const cookieStore = await cookies();

  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/');

  // return {
  //   success: true,
  //   token,
  //   user: {
  //     id: user.id,
  //     email: user.email,
  //   },
  // };
}

export async function registerAction(prevState: any, formData: FormData) {
  const data = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
    confirmPassword: String(formData.get('confirmPassword') ?? ''),
  };

  const result = registerSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, errors, values: data };
  }

  const existing = await prisma.user.findUnique({
    where: { email: result.data.email },
  });

  if (existing) {
    return {
      success: false,
      errors: { email: ['Email is already registered'] },
      values: data,
    };
  }

  const hashed = await hashPassword(result.data.password);

  const user = await prisma.user.create({
    data: {
      email: result.data.email,
      password: hashed,
    },
  });

  redirect('/login');
  // return {
  //   success: true,
  //   user: {
  //     id: user.id,
  //     email: user.email,
  //   },
  // };
}

export async function logoutAction(prevState: any, formData: FormData) {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  redirect('/login');
}
