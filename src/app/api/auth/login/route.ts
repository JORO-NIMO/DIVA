import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { setAuthCookie, verifyPassword, publicUser } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    setAuthCookie(user.id);
    return NextResponse.json(publicUser(user));
  } catch (error) {
    console.error('Login error', error);
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
  }
}
