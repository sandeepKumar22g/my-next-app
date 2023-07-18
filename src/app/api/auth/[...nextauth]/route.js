import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvier from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_APP_GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvier({
      id: "credentials",
      name: "credentials",
      async authorize(credentials){
        await connect()
        try {
          console.log(credentials)
          const user = await User.findOne({email: credentials.email})
          console.log(user)
          if (user !== null){
            console.log("it is he", user)
            
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
            if(isPasswordCorrect){
              return user
            }else{
              throw new Error("Wrong email or password")
            }

         
        }

        } catch (err) {
          throw new Error(err)
        }
      }
    })
  ],
  pages:{
    error: "/dashboard/login"
  }
})

export {handler as GET, handler as POST}