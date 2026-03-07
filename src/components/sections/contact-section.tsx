"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { sendContactEmail } from "@/app/actions/contact-action";

const contactInfo = [
    { label: "Email", value: "dinariani258@gmail.com", href: "mailto:dinariani258@gmail.com" },
    { label: "Téléphone", value: "07 69 05 33 06", href: "tel:+33769053306" },
    { label: "LinkedIn", value: "in/dina-riani-53a876333", href: "https://www.linkedin.com/in/dina-riani-53a876333/" },
    { label: "Localisation", value: "France", href: null },
];

export function ContactSection() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, null);
    const [showSuccess, setShowSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.success) {
            setShowSuccess(true);
            formRef.current?.reset();
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000); // Disparaît après 5 secondes
            return () => clearTimeout(timer);
        }
    }, [state]);

    return (
        <section id="contact" className="scroll-mt-24 bg-[#FEFCF8] py-16">
            <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col items-center">
                {/* En-tête minimalist */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#C9A84C]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                            Contact
                        </span>
                        <span className="h-px w-8 bg-[#C9A84C]" />
                    </div>
                    <h2
                        className="font-display text-4xl font-bold text-[#1C1815] lg:text-6xl lg:leading-[1.1]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Une opportunité ?<br />
                        <span className="text-[#C9A84C] italic font-normal">Discutons-en.</span>
                    </h2>
                </div>

                <div className="w-full grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left side: Very large contact info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="mb-14 max-w-md text-lg leading-relaxed text-[#6B6058]">
                                Que ce soit pour une opportunité de stage, une alternance ou simplement pour échanger sur le contrôle de gestion et la finance, je serais ravie de vous lire.
                            </p>
                            <div className="flex flex-col gap-10">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="group flex flex-col">
                                        <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9088]">
                                            {info.label}
                                        </span>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-xl md:text-3xl font-display text-[#1C1815] transition-colors hover:text-[#C9A84C]"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span
                                                className="text-xl md:text-3xl font-display text-[#1C1815]"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {info.value}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-16 inline-block rounded-r-3xl rounded-bl-3xl rounded-tl-sm bg-[#FBF0F5] p-6 max-w-xs transition-transform hover:-translate-y-1">
                            <p className="text-sm font-semibold text-[#A0405E] leading-relaxed">
                                Disponible pour un stage ou une alternance en gestion / finance.
                            </p>
                            <div className="mt-4 h-1 w-12 bg-[#E8A4B8] rounded-full" />
                        </div>
                    </div>

                    {/* Right side: Ultra-minimalist form */}
                    <div className="relative">
                        {showSuccess ? (
                            <div className="flex h-full min-h-[450px] flex-col items-center justify-center gap-6 rounded-[32px] bg-white p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1C1815]/5 transition-opacity animate-in fade-in duration-500">
                                <span className="flex size-20 items-center justify-center rounded-full bg-[#F5EDD6] text-3xl">
                                    ✨
                                </span>
                                <div>
                                    <h3 className="mb-3 font-display text-3xl font-bold text-[#1C1815]" style={{ fontFamily: "var(--font-display)" }}>
                                        Message envoyé
                                    </h3>
                                    <p className="text-[#6B6058] text-lg">Merci ! Je vous réponds dans les plus brefs délais.</p>
                                </div>
                            </div>
                        ) : (
                            <form ref={formRef} action={formAction} className="flex flex-col gap-10 rounded-[32px] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1C1815]/5 lg:p-14 transition-opacity animate-in fade-in duration-500">
                                <div className="group relative">
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        required
                                        placeholder=" "
                                        className="peer w-full border-b border-[#E8D5A3] bg-transparent py-4 text-base italic text-[#1C1815] outline-none transition-colors focus:border-[#C9A84C]"
                                    />
                                    <label
                                        htmlFor="contact-name"
                                        className="pointer-events-none absolute left-0 top-4 text-sm font-semibold tracking-wide text-[#9A9088] transition-all peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#C9A84C] peer-valid:-translate-y-6 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-[#C9A84C]"
                                    >
                                        Nom complet
                                    </label>
                                </div>

                                <div className="group relative">
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        required
                                        placeholder=" "
                                        className="peer w-full border-b border-[#E8D5A3] bg-transparent py-4 text-base italic text-[#1C1815] outline-none transition-colors focus:border-[#C9A84C]"
                                    />
                                    <label
                                        htmlFor="contact-email"
                                        className="pointer-events-none absolute left-0 top-4 text-sm font-semibold tracking-wide text-[#9A9088] transition-all peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#C9A84C] peer-valid:-translate-y-6 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-[#C9A84C]"
                                    >
                                        Adresse Email
                                    </label>
                                </div>

                                <div className="group relative">
                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        required
                                        placeholder=" "
                                        className="peer w-full border-b border-[#E8D5A3] bg-transparent py-4 text-base italic text-[#1C1815] outline-none transition-colors focus:border-[#C9A84C]"
                                    />
                                    <label
                                        htmlFor="contact-subject"
                                        className="pointer-events-none absolute left-0 top-4 text-sm font-semibold tracking-wide text-[#9A9088] transition-all peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#C9A84C] peer-valid:-translate-y-6 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-[#C9A84C]"
                                    >
                                        Sujet
                                    </label>
                                </div>

                                <div className="group relative">
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder=" "
                                        className="peer w-full resize-none border-b border-[#E8D5A3] bg-transparent py-4 text-base italic text-[#1C1815] outline-none transition-colors focus:border-[#C9A84C]"
                                    />
                                    <label
                                        htmlFor="contact-message"
                                        className="pointer-events-none absolute left-0 top-4 text-sm font-semibold tracking-wide text-[#9A9088] transition-all peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#C9A84C] peer-valid:-translate-y-6 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-[#C9A84C]"
                                    >
                                        Message
                                    </label>
                                </div>

                                {state?.success === false ? (
                                    <p className="text-xs font-medium text-red-500">{state.error}</p>
                                ) : null}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="group mt-4 flex w-fit items-center gap-4 rounded-full bg-[#1C1815] px-10 py-5 tracking-wide text-white transition-all hover:bg-[#C9A84C] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                                        {isPending ? "Envoi..." : "Envoyer"}
                                    </span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
