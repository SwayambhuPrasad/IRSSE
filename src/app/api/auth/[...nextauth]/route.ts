import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const authOptions = {
  adapters: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials: { email: string; password: string }) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          return null;
        }

        // const user = users.find((u) => u.email === credentials.email);
        const emailMatch = credentials.email === user.email;
        if (!user.password) return null;
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (emailMatch && passwordMatch) return user;

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // session: {
  //   strategy: "jwt",
  // },
  secret: process.env.NEXTAUTH_URL,
  // debug: process.env.NODE_ENV !== "developement",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
