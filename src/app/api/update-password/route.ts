import { prisma } from "@/libs/prismaDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { email, currentPassword, newPassword } = body;

  if (!email || !currentPassword || !newPassword) {
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

  const passwordMatch = await bcrypt.compare(
    currentPassword,
    user.hashedPassword!,
  );

  if (!passwordMatch) {
    return new NextResponse("Incorrect current password", { status: 401 });
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      hashedPassword: hashedNewPassword,
    },
  });

  return new NextResponse("Password changed successfully", { status: 200 });
}
