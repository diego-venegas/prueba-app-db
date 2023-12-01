import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { zfd } from "zod-form-data";
 
const schema = zfd.formData({
  email: zfd.text(),
  username: zfd.text(),
  password: zfd.text(),
});

export async function POST(request: Request) {
  /*const formData = await request.formData();
  const email = formData.get('email');
  const username = formData.get('username');
  const password = formData.get('password');
*/
const { email, username, password } = schema.parse(await request.formData());
  try {
    if (!email || !username || !password) throw new Error('email, username and password required');
    await sql`INSERT INTO Users (Email, Username, Password) VALUES (${email}, ${username}, ${password});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}