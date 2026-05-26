import { useState } from "react";
import { toast } from "sonner";

/**
 * Hook personnalisé gérant la logique du formulaire de contact.
 * Encapsule l'état (en cours, succès) et la soumission des données à l'API.
 */
export function useContactForm() {
    // État indiquant si l'envoi est en cours (pour désactiver le bouton de soumission)
    const [isPending, setIsPending] = useState(false);
    
    // État contrôlant l'affichage de l'animation de succès dans le formulaire
    const [showSuccess, setShowSuccess] = useState(false);

    /**
     * Gère la soumission du formulaire, envoie les données à l'API 
     * et gère les feedbacks utilisateur (Toasts).
     */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Empêche le rechargement classique de la page
        event.preventDefault();
        
        // Active l'état de chargement
        setIsPending(true);

        // Récupère automatiquement toutes les valeurs des champs du formulaire
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Appel à l'API Next.js
            const response = await fetch("/api/mail/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // Si le serveur renvoie une erreur (ex: validation Zod ou erreur SMTP)
            if (!response.ok) {
                toast.error("Erreur d'envoi", {
                    description: result.error || "Une erreur inattendue est survenue, veuillez réessayer."
                });
                return false;
            }

            // Affiche une notification de succès (Toast Sonner)
            toast.success("Message envoyé avec succès !", {
                description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais."
            });
            
            // Déclenche l'animation de succès dans l'interface UI
            setShowSuccess(true);
            
            // Masque la vue de succès après 5 secondes pour permettre un nouvel envoi
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
            
            return true; // Retourne "true" pour indiquer au composant qu'il peut vider ses champs
            
        } catch (err: unknown) {
            // Gestion des erreurs réseau (ex: plus d'Internet ou blocage CORS)
            toast.error("Erreur réseau", {
                description: err instanceof Error ? err.message : "Impossible de contacter le serveur."
            });
            return false;
        } finally {
            // Quoi qu'il arrive (succès ou échec), on retire l'état de chargement
            setIsPending(false);
        }
    };

    return {
        isPending,
        showSuccess,
        handleSubmit
    };
}
