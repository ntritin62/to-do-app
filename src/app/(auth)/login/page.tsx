'use client';
import Image from 'next/image';
import { FaUser, FaLock, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { loginSchema } from '@/schemas/authSchema';
import { useActionState } from 'react';
import Link from 'next/link';
export async function loginAction(prevState: any, formData: FormData) {
  const data = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
  };

  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, errors };
  }

  return { success: true };
}

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, {
    success: false,
    errors: {},
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F96167] px-4">
      <div className="bg-white w-full max-w-5xl rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg">
        {/* Left Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          <form action={formAction} className="space-y-6">
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96167]"
              />
              {state.errors?.email && (
                <p className="text-red-500">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96167]"
              />
              {state.errors?.password && (
                <p className="text-red-500">{state.errors.password[0]}</p>
              )}
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F96167] text-white py-2 rounded-md hover:bg-[#e4525e] transition"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm mb-3">Or, Login with</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white p-2 rounded-full">
                <FaFacebookF />
              </button>
              <button className="bg-white border p-2 rounded-full">
                <FaGoogle className="text-red-600" />
              </button>
              <button className="bg-black text-white p-2 rounded-full">
                <SiX />
              </button>
            </div>
            <p className="mt-4 text-sm">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-blue-600 hover:underline">
                Create One
              </Link>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center justify-center bg-white">
          <Image
            src="/login-illustration.png"
            alt="Login Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
