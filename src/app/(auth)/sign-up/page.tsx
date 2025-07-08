'use client';
import Image from 'next/image';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { useActionState } from 'react';
import Link from 'next/link';
import { registerAction } from '@/actions/authActions';
export default function RegisterPage() {
  const [state, formAction] = useActionState(registerAction, {
    success: false,
    errors: {},
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F96167] px-4">
      <div className="bg-white w-full max-w-5xl rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-lg">
        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center bg-white">
          <Image
            src="/register-illustration.png"
            alt="Register Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
          <form action={formAction} className="space-y-6">
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                defaultValue={state?.values?.email ?? ''}
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
                name="password"
                defaultValue={state?.values?.password ?? ''}
                className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96167]"
              />
              {state.errors?.password && (
                <p className="text-red-500">{state.errors.password[0]}</p>
              )}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                defaultValue={state?.values?.confirmPassword ?? ''}
                className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F96167]"
              />
              {state.errors?.confirmPassword && (
                <p className="text-red-500">
                  {state.errors.confirmPassword[0]}
                </p>
              )}
            </div>

            {/* <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I agree to all terms
              </label>
            </div> */}

            <button
              type="submit"
              className="w-full bg-[#F96167] text-white py-2 rounded-md hover:bg-[#e4525e] transition"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
