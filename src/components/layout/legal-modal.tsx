"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function LegalModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="hover:text-[#C9A84C] transition-colors cursor-pointer outline-none">
                    Mentions Légales
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-[#FEFCF8] p-10 rounded-[40px] border-[#1C1815]/10 max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
                <DialogHeader className="mb-8 border-b border-[#1C1815]/5 pb-6">
                    <DialogTitle className="font-display text-3xl font-bold text-[#1C1815] text-left">
                        Mentions Légales
                    </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-8 text-[#6B6058] leading-relaxed text-left">
                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3 opacity-80">Propriétaire du site (Client)</h3>
                        <p className="text-base font-bold text-[#1C1815]">Dina Riani</p>
                        <p className="text-sm">Étudiante — BUT GEA</p>
                        <p className="text-sm">Meaux, France</p>
                        <p className="text-sm">Email : contact@dina-riani.fr</p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3 opacity-80">Conception & Développement</h3>
                        <p className="text-base font-bold text-[#1C1815]">Harrat Yanis — Black Rise</p>
                        <p className="text-sm">SIREN : 919 266 668 | SIRET : 919 266 668 00020</p>
                        <p className="text-sm">15 ALLEE des Demoiselles d'Avignon, 92000 Nanterre</p>
                        <p className="text-sm italic">Programmation informatique (6201Z)</p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3 opacity-80">Hébergement & Code Source</h3>
                        <p className="text-sm font-medium text-[#1C1815]">Plateforme Vercel (Vercel Inc.)</p>
                        <p className="text-[13px] mb-2">440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
                        <p className="text-[13px]">Code source géré et versionné via <span className="font-bold text-[#1C1815]">GitHub</span>.</p>
                    </section>

                    <section className="pt-4 border-t border-[#1C1815]/5">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3 opacity-80">Droits d'Auteur</h3>
                        <p className="text-[13px]">
                            L'ensemble des contenus présents sur ce site (textes, images, structure) appartient exclusivement à <span className="font-bold text-[#1C1815]">Dina Riani</span>, sauf mention contraire. Toute reproduction ou représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'éditeur, est interdite.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-3 opacity-80">Protection des données</h3>
                        <p className="text-[13px] mb-3">
                            Conformément au RGPD, aucune donnée personnelle n'est collectée à des fins commerciales. Les informations partagées via les formulaires de contact sont conservées pour une durée maximale de <span className="font-bold text-[#1C1815]">3 ans</span> à compter du dernier contact.
                        </p>
                        <p className="text-[13px]">
                            Vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Pour toute réclamation, vous pouvez contacter la <a href="https://www.cnil.fr" target="_blank" className="font-bold text-[#1C1815] hover:underline">CNIL</a>.
                        </p>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
}
