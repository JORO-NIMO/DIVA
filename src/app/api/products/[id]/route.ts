import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    if (!product.isPublished) {
      const user = await getSessionUser();
      if (!user || user.id !== product.ownerId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
      }
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
