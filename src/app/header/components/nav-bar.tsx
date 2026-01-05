"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/routes";

const navLinks = NAV_LINKS;

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-1 p-4 justify-end items-end gap-8 opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards]">
      {navLinks.map((link) => {
      const isActive = pathname === link.href.split('#')[0];

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-all duration-200 hover:text-green-600 relative py-1
              ${isActive ? "text-green-600" : "text-gray-600"}
            `}
          >
            {link.label}
            
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 rounded-full animate-fade-in" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}