import { prisma } from "@/libs/prismaDB";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();

  const { email, name } = body;

  if (!email || !name) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const updateData: { name?: string; email?: string } = {};

  if (name) {
    updateData.name = name;
  }

  if (email) {
    updateData.email = email;
  }

  const updatedUser = await prisma.user.update({
    where: {
      email,
    },
    data: updateData,
  });

  return new NextResponse("Username and/or email changed successfully", {
    status: 200,
  });
}

export async function GET() {
  try {
    return NextResponse.json({ message: "Hello" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
