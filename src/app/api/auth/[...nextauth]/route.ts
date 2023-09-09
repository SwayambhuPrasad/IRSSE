import { users } from "@/constants/User/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
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
        const user = users.find((u) => u.email === credentials.email);
        if (user?.password === credentials.password) return user;

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_URL,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
