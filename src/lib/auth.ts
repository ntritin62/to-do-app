import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';
const JWT_SECRET = process.env.JWT_SECRET!;
import { cookies } from 'next/headers';

const JWT_SECRET_JOSE = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePasswords(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}

export function generateJWT(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export async function verifyJWT(token: string) {
  const { payload } = await jwtVerify(token, JWT_SECRET_JOSE);
  return payload as { userId: string; iat: number; exp: number };
}

export async function getCurrentUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  try {
    const token = await cookieStore.get('token')?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, JWT_SECRET_JOSE);
    return (payload as any).userId;
  } catch (error) {
    console.error('❌ Failed to get current user:', error);
    return null;
  }
}
