import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { prisma } from './prisma';

const TOKEN_NAME = 'dw_auth';

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not set');
  }
  return secret;
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signAuthToken(userId: string) {
  return jwt.sign({ userId }, getSecret(), { expiresIn: '7d' });
}

export function setAuthCookie(userId: string) {
  cookies().set(TOKEN_NAME, signAuthToken(userId), {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export function clearAuthCookie() {
  cookies().delete(TOKEN_NAME);
}

export async function getSessionUser() {
  const token = cookies().get(TOKEN_NAME)?.value;
  if (!token) return null;

  try {
    const payload = jwt.verify(token, getSecret()) as { userId: string };
    return prisma.user.findUnique({ where: { id: payload.userId } });
  } catch (error) {
    console.error('Failed to verify auth token', error);
    return null;
  }
}

export function publicUser(user: { id: string; email: string; name: string | null }) {
  return { id: user.id, email: user.email, name: user.name };
}
