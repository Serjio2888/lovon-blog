import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export const getAuthSession = async () => {
  return getServerSession(authOptions);
};
