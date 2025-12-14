import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, setAuthCookie, publicUser } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (existing) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name: name ?? null,
        passwordHash,
      },
    });

    setAuthCookie(user.id);
    return NextResponse.json(publicUser(user));
  } catch (error) {
    console.error('Register error', error);
    return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
  }
}
