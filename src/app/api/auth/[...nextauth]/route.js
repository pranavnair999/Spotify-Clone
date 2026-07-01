import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../../Mongodb/mongodbConnect";
import User from "../../../../../Mongodb/UserSchema";
import bcrypt from 'bcrypt';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId:process.env.GITHUB_ID,
      clientSecret:process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
    name: "credentials",
    credentials:{},
    async authorize(credentials){
        const {email,password }=credentials;
    try {
          await connectDB();
          console.log("Connected to DB");

          const user =await User.findOne({email});
          console.log("User found:",user);

          if(!user){
            console.log("User not found");
            return null;
          }

          const passwordMatch=await bcrypt.compare(password,user.password);
          console.log("Password Match:",passwordMatch);

          if (!passwordMatch) {
            console.log("Password mismatch");
            return null;
          }

          return user;
        } catch (err) {
          console.error("An error occurred during authorization:", err);
          return null;
        }
      }
    }),
  ],
  session: {
    strategy: "jwt"
  },
  secret:process.env.NEXT_PUBLIC_NEXT_SECRET,
  pages: {
    signIn: "/signin"
  }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
