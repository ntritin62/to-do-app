import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-center text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Go back to Home
      </Link>
    </main>
  );
}
