
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
   
const token=await getToken({req,secret:process.env.NEXT_PUBLIC_NEXT_SECRET});
    
  if (!token) {
    return NextResponse.redirect(new URL('/signup',req.url));
  }
 return NextResponse.next();
}

export const config = {
  matcher:['/',"/about","/help","/contact"],
};
