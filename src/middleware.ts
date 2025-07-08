import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  const isAuthPage = pathname === '/login' || pathname === '/sign-up';

  if (!isAuthPage) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch {
      const res = NextResponse.redirect(new URL('/login', req.url));
      res.cookies.set({
        name: 'token',
        value: '',
        path: '/',
        maxAge: 0,
      });
      return res;
    }
  }

  if (isAuthPage && token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.redirect(new URL('/', req.url));
    } catch {
      const res = NextResponse.next();
      res.cookies.set({
        name: 'token',
        value: '',
        path: '/',
        maxAge: 0,
      });
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/sign-up', '/dashboard/:path*', '/my-task/:path*'],
};
