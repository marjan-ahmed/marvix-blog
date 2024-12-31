'use client';
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <nav className="w-full flex items-center relative justify-between max-w-2xl mx-auto px-4 my-5 sm:px-8">
      <Link href="/" className="font-bold text-3xl">
        Marvix<span className="text-slate-500">Blog</span>
      </Link>

        <div className="ml-auto">
          <ModeToggle />
        </div>
        <div>
          {isSignedIn ? (
            <UserButton showName />
          ) : (
            <Link href={'/login'}>
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
    </nav>
  );
}

export default Header;
