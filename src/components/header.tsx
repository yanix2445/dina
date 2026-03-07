"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navLinks = [
    { label: "À propos", href: "#about" },
    { label: "Parcours", href: "#parcours" },
    { label: "Compétences", href: "#competences" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#C9A84C30]"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
                {/* Monogramme */}
                <a href="#" aria-label="Retour en haut" className="group flex items-center gap-3">
                    <span
                        className={cn(
                            "flex size-9 items-center justify-center rounded-full border text-[11px] font-semibold tracking-wider transition-all duration-300",
                            scrolled
                                ? "border-[#C9A84C] text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-white"
                                : "border-[#C9A84C]/60 text-[#C9A84C] group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/10"
                        )}
                    >
                        DR
                    </span>
                </a>

                {/* Liens */}
                <nav className="hidden items-center gap-8 sm:flex" aria-label="Navigation principale">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-[13px] font-medium text-neutral-500 transition-colors hover:text-neutral-900 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#C9A84C] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="rounded-full bg-[#C9A84C] px-5 py-2 text-[12px] font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#9E7B30] hover:shadow-md hover:shadow-[#C9A84C]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/50 focus-visible:ring-offset-2"
                >
                    Me contacter
                </a>
            </div>
        </header>
    );
}
