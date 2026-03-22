"use client";

import { useRef } from "react";
import { useContactForm } from "../hooks/use-contact-form";

/**
 * Composant de formulaire de contact.
 * Il inclut la validation côté client, la gestion d'état (via le hook useContactForm),
 * l'animation de succès et le design des champs avec "floating labels" (labels animés).
 */
export function ContactForm() {
    // Récupération de la logique métier (hook personnalisé)
    // "error" a été supprimé car remplacé par les Toasts de Sonner
    const { isPending, showSuccess, handleSubmit } = useContactForm();
    
    // Référence pour pouvoir réinitialiser le formulaire (vider les champs) après un succès
    const formRef = useRef<HTMLFormElement>(null);

    // Fonction déclenchée à la soumission du formulaire
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const success = await handleSubmit(e);
        // Si l'e-mail est parti avec succès, on vide les champs
        if (success) {
            formRef.current?.reset();
        }
    };

    // Affichage alternatif : Message de succès si le formulaire a été envoyé
    if (showSuccess) {
        return (
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
        );
    }

    // Affichage principal : Le formulaire interactif
    return (
        <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-10 rounded-[32px] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1C1815]/5 lg:p-14 transition-opacity animate-in fade-in duration-500">
            
            {/* Champ : Nom Complet */}
            {/* L'utilisation de "peer" dans Tailwind permet d'animer le label (floating label) quand l'input est focus ou rempli (valid) */}
            <div className="group relative">
                <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder=" " // Important pour que la classe `peer-valid` fonctionne correctement
                    className="peer w-full border-b border-[#E8D5A3] bg-transparent py-4 text-base italic text-[#1C1815] outline-none transition-colors focus:border-[#C9A84C]"
                />
                <label
                    htmlFor="contact-name"
                    className="pointer-events-none absolute left-0 top-4 text-sm font-semibold tracking-wide text-[#9A9088] transition-all peer-focus:-translate-y-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[#C9A84C] peer-valid:-translate-y-6 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-[0.2em] peer-valid:text-[#C9A84C]"
                >
                    Nom complet
                </label>
            </div>

            {/* Champ : Email */}
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

            {/* Champ : Sujet */}
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

            {/* Champ : Message (Zone de texte) */}
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

            {/* Consentement RGPD / Politique de confidentialité */}
            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="gdpr-consent"
                    name="gdpr_consent"
                    required
                    className="mt-1 size-4 rounded border-[#E8D5A3] text-[#C9A84C] focus:ring-[#C9A84C]"
                />
                <label htmlFor="gdpr-consent" className="text-[10px] leading-relaxed text-[#9A9088]">
                    En envoyant ce formulaire, j'accepte que mes données soient traitées par Dina Riani pour répondre à ma demande, conformément à la politique de confidentialité.
                </label>
            </div>

            {/* Bouton de soumission avec état de chargement dynamique */}
            <button
                type="submit"
                disabled={isPending} // Désactive le bouton pendant l'envoi
                className="group mt-4 flex w-fit items-center gap-4 rounded-full bg-[#1C1815] px-10 py-5 tracking-wide text-white transition-all hover:bg-[#C9A84C] disabled:cursor-not-allowed disabled:opacity-50"
            >
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    {isPending ? "Envoi..." : "Envoyer"}
                </span>
                
                {/* Icône de flèche */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </form>
    );
}
