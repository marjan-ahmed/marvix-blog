import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full my-20 flex items-center relative justify-between max-w-2xl mx-auto px-4 sm:px-8">
      <Link href="/" className="font-bold text-3xl">
        Marvix<span className="text-blue-500">Blog</span>
      </Link>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
