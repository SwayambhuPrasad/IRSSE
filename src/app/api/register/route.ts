import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, password } = body;
  console.log(name, email, password);
  if (!name || !email || !password) {
    return new NextResponse("Name, email and password are required", {
      status: 400,
    });
  }
  const exist = await prisma.user.findUnique({
    where: { email },
  });
  if (exist) {
    return new NextResponse("User already exists", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      isAdmin: false,
    },
  });

  return NextResponse.json(user);
}
