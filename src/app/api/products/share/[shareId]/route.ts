import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: Promise<{ shareId: string }> }) {
  try {
    const { shareId } = await params;
    const product = await prisma.product.findUnique({ where: { shareId } });
    if (!product) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching shared product', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
