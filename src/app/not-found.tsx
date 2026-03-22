import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="flex min-h-[80vh] flex-col items-center justify-center bg-[#FEFCF8] px-6 text-center">
                <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A84C]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                        Erreur 404
                    </span>
                    <span className="h-px w-8 bg-[#C9A84C]" />
                </div>
                <h2
                    className="mb-6 font-display text-5xl font-bold text-[#1C1815] lg:text-7xl"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    Page introuvable
                </h2>
                <p className="mb-10 max-w-md text-lg leading-relaxed text-[#6B6058]">
                    Il semblerai que vous vous soyez égaré La page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1C1815] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#C9A84C] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/60 focus-visible:ring-offset-2"
                >
                    Retour à l'accueil
                </Link>
            </main>
            <Footer />
        </>
    );
}
