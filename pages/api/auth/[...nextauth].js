import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { client_id, client_secret } from '../hello';
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: client_id,
      clientSecret: client_secret,
    }),
  ],
//   secret:process.env.JWT_SECRET
});
