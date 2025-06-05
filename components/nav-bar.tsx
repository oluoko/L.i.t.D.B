import Link from "next/link";
import { Heading } from "@/components/typography";
import NavBarDropdown from "@/components/nav-dropdown";

export function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="h-16 fixed top-0 left-0 right-0 overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-foreground/20 ">
      <Link href="/" className="flex items-center">
        <Heading className="text-xl font-bold">L.i.t.D.B</Heading>
      </Link>
      <div className="hidden md:block">{children}</div>
      <NavBarDropdown />
    </nav>
  );
}
