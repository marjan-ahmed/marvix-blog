import { SignedIn, SignedOut, SignIn, SignInButton } from '@clerk/nextjs';
import React from 'react';

function Login() {
  return (
    <div>
        <main className="container flex flex-col justify-center items-center mt-8 mx-auto p-4">
        <h1 className="block text-3xl font-bold mb-4">Login</h1>
        <SignedOut>
              <SignIn routing="hash"/>
            </SignedOut>
            <SignedIn>
              <SignInButton />
            </SignedIn>
      </main>
    </div>
  )
}

export default Login