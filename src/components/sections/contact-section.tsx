"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendContactEmail } from "@/app/actions/contact-action";

const contactInfo = [
    { label: "Email", value: "dina.riani@example.com", href: "mailto:dina.riani@example.com" },
    { label: "LinkedIn", value: "linkedin.com/in/dina-riani", href: "https://linkedin.com" },
    { label: "Localisation", value: "France", href: null },
];

export function ContactSection() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, null);

    return (
        /* Fond ivoire/crème — plus neutre que le rose pur */
        <section
            id="contact"
            className="scroll-mt-24 py-32"
            style={{ background: "#FAF6F0" }}
        >
            <div className="mx-auto max-w-6xl px-8">
                {/* En-tête */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C9A84C]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                            Contact
                        </span>
                        <span className="h-px w-8 bg-[#C9A84C]" />
                    </div>
                    <h2
                        className="font-display text-4xl font-bold lg:text-5xl"
                        style={{ fontFamily: "var(--font-display)", color: "#1C1815" }}
                    >
                        Travaillons ensemble
                    </h2>
                    <p className="mt-4 max-w-md text-sm" style={{ color: "#6B6058" }}>
                        Une opportunité de stage, une question ? Laissez-moi un message,
                        je vous réponds rapidement.
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
                    {/* Infos contact */}
                    <div className="flex flex-col justify-center gap-8 lg:col-span-2">
                        {contactInfo.map((info) => (
                            <div key={info.label}>
                                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C]">
                                    {info.label}
                                </p>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="text-sm font-medium transition-colors hover:text-[#C9A84C]"
                                        style={{ color: "#3D3530" }}
                                        {...(info.href.startsWith("http") && {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        })}
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-sm font-medium" style={{ color: "#3D3530" }}>
                                        {info.value}
                                    </p>
                                )}
                                {/* Séparateur taupe */}
                                <div className="mt-3 h-px" style={{ background: "#DDD0C8" }} />
                            </div>
                        ))}

                        {/* Petit accent rose ici — discret, bien placé */}
                        <div className="rounded-xl border border-[#F5D6E2] bg-[#FBF0F5] p-4">
                            <p className="text-xs font-medium text-[#C47090]">
                                Disponible dès juin 2025 pour un stage ou une alternance.
                            </p>
                        </div>
                    </div>

                    {/* Formulaire — carte blanche sur fond crème */}
                    <div className="lg:col-span-3">
                        <div
                            className="rounded-2xl border bg-white p-8 shadow-sm"
                            style={{ borderColor: "#E8D5A3" }}
                        >
                            {state?.success ? (
                                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                                    <div className="flex size-14 items-center justify-center rounded-full bg-[#F5EDD6]">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M5 13l4 4L19 7" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-semibold" style={{ color: "#1C1815" }}>Message envoyé</p>
                                    <p className="text-sm" style={{ color: "#6B6058" }}>Je vous répondrai dans les plus brefs délais.</p>
                                </div>
                            ) : (
                                <form action={formAction} className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#6B6058" }}>
                                                Nom
                                            </Label>
                                            <Input
                                                id="contact-name"
                                                name="name"
                                                placeholder="Votre nom"
                                                required
                                                autoComplete="name"
                                                className="h-10 border-[#E8D5A3] bg-[#FEFCF8] focus-visible:border-[#C9A84C] focus-visible:ring-[#C9A84C]/20"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#6B6058" }}>
                                                Email
                                            </Label>
                                            <Input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                placeholder="votre@email.com"
                                                required
                                                autoComplete="email"
                                                spellCheck={false}
                                                className="h-10 border-[#E8D5A3] bg-[#FEFCF8] focus-visible:border-[#C9A84C] focus-visible:ring-[#C9A84C]/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="contact-subject" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#6B6058" }}>
                                            Objet
                                        </Label>
                                        <Input
                                            id="contact-subject"
                                            name="subject"
                                            placeholder="Objet de votre message"
                                            required
                                            className="h-10 border-[#E8D5A3] bg-[#FEFCF8] focus-visible:border-[#C9A84C] focus-visible:ring-[#C9A84C]/20"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#6B6058" }}>
                                            Message
                                        </Label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows={5}
                                            placeholder="Votre message…"
                                            required
                                            className="w-full rounded-md border border-[#E8D5A3] bg-[#FEFCF8] px-3 py-2.5 text-sm outline-none placeholder:text-neutral-300 transition-colors focus-visible:border-[#C9A84C] focus-visible:ring-2 focus-visible:ring-[#C9A84C]/20 resize-none"
                                            style={{ color: "#3D3530" }}
                                        />
                                    </div>

                                    {state?.success === false && (
                                        <p className="text-xs font-medium text-red-500">{state.error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full rounded-full bg-[#C9A84C] py-3 text-sm font-semibold text-white shadow-md shadow-[#C9A84C]/20 transition-all hover:bg-[#9E7B30] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]/50 focus-visible:ring-offset-2"
                                    >
                                        {isPending ? "Envoi en cours…" : "Envoyer le message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
