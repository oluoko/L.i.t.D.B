import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const links = [
    {
      label: "Github",
      slug: "github",
      href: "https://github.com/oluoko/L.i.t.D.B",
      Icon: GithubIcon,
    },
  ];
  return (
    <>
      <div className="flex gap-2 md:gap-6">
        {links.map((link) => (
          <Link
            key={link.slug}
            href={link.href}
            target="_blank"
            className="flex items-center gap-2 bg-muted-foreground/80 hover:bg-muted-foreground/60 rounded-lg transition-colors p-2"
          >
            <link.Icon className="w-5 h-5" />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
