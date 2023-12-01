import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

const { email, username, password } = await request.json();
  try {
    if (!email || !username || !password) throw new Error('email, username and password required');
    console.log({email, username, password});
    await sql`INSERT INTO Users (Email, Username, Password) VALUES (${email}, ${username}, ${password});`;
  } catch (error) {
    console.log({error});
  }
  return NextResponse.json({message: 'success'});
  //return NextResponse.json({ users }, { status: 200 });
}