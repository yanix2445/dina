import { ContactForm } from "@/features/mail/components/contact-form";

const contactInfo = [
    { label: "Email", value: "contact@dina-riani.fr", href: "mailto:contact@dina-riani.fr" },
    { label: "LinkedIn", value: "dina rianii", href: "https://www.linkedin.com/in/dina-rianii/" },
    { label: "Localisation", value: "Meaux, Paris, France", href: null },
];

export function ContactSection() {
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
                        <span className="text-[#C9A84C] italic font-normal">Discutons-en</span>
                    </h2>
                </div>

                <div className="w-full grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left side: Very large contact info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="mb-14 max-w-md text-lg leading-relaxed text-[#6B6058]">
                                Pour une alternance ou simplement pour échanger sur le contrôle de gestion et la finance, je serais ravie de vous lire.
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
                                                {...(info.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
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
                                Disponible pour une alternance en gestion / finance. Des septembre 2026
                            </p>
                            <div className="mt-4 h-1 w-12 bg-[#E8A4B8] rounded-full" />
                        </div>
                    </div>

                    {/* Right side: Contact form imported from feature */}
                    <div className="relative">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
