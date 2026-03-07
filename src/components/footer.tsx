export function Footer() {
    return (
        <footer className="bg-white py-10">
            <div className="mx-auto max-w-6xl px-8">
                {/* Double séparateur — or + rose */}
                <div className="mb-1 h-px bg-[#C9A84C]/30" />
                <div className="mb-8 h-px bg-[#E8A4B8]/20" />

                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    {/* Monogramme + nom */}
                    <div className="flex items-center gap-3">
                        <span className="flex size-8 items-center justify-center rounded-full border border-[#C9A84C]/50 text-[10px] font-semibold tracking-wider text-[#C9A84C]">
                            DR
                        </span>
                        <span className="text-sm font-medium text-neutral-500">
                            Dina RIANI
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-neutral-400">
                        © {new Date().getFullYear()} — Tous droits réservés
                    </p>

                    {/* Liens */}
                    <div className="flex items-center gap-5">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-neutral-400 transition-colors hover:text-[#C9A84C]"
                        >
                            LinkedIn
                        </a>
                        {/* Séparateur rose */}
                        <span className="size-1.5 rounded-full bg-[#E8A4B8]" />
                        <a
                            href="mailto:dina.riani@example.com"
                            className="text-xs font-medium text-neutral-400 transition-colors hover:text-[#C47090]"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
