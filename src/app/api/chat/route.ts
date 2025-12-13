import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful and knowledgeable sales assistant for "Divine's Wrist Wear", a luxury watch brand. 
          Your goal is to help customers find the perfect watch, answer questions about shipping, warranty, and brand values.
          
          Key Information:
          - Brand Name: Divine's Wrist Wear
          - Style: Timeless, blending youthful elegance with modern luxury.
          - Price Range: Affordable luxury ($85) to Premium ($250+).
          - Warranty: 2-year comprehensive warranty on all watches.
          - Shipping: Free shipping on orders over $100.
          - Categories: Luxury, Sporty, Casual, Ladies, Men's.
          
          Tone: Professional, polite, enthusiastic, and helpful. Keep responses concise (under 3 sentences if possible).`
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch response from AI' }, { status: 500 });
  }
}
