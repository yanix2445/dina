import { Resend } from "resend";
import { getContactEmailTemplate } from "@/features/mail/templates/contact.template";

/**
 * Interface définissant les paramètres requis pour envoyer un e-mail
 */
export interface SendEmailParams {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Initialisation du client Resend avec la clé API stockée dans le fichier .env
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Class Service gérant toute la logique d'envoi d'e-mails.
 * Centralise la configuration Resend pour éviter de la dupliquer ailleurs.
 */
export class MailService {
    // L'adresse d'expédition (doit être un domaine vérifié sur Resend, ex: contact@ton-domaine.fr)
    private static fromEmail = "Dina Riani <contact@dina-riani.fr>";
    
    // L'adresse de réception (la tienne, où tu recevras les messages des visiteurs)
    private static toEmail = "contact@dina-riani.fr";

    /**
     * Envoie l'e-mail de contact en utilisant le SDK officiel de Resend.
     * @param params Objet contenant le nom, l'email, le sujet et le message
     */
    static async sendContactEmail({ name, email, subject, message }: SendEmailParams) {
        // Sécurité : Si la clé API n'est pas configurée (ex: environnement de dev local non setup),
        // on simule l'envoi pour ne pas faire crasher l'application.
        if (!process.env.RESEND_API_KEY) {
            console.log("⚠️ RESEND_API_KEY non configurée. Simulation de l'envoi :", { name, email, subject });
            return { success: true };
        }

        // Récupération de la structure HTML stylisée de l'e-mail
        const html = getContactEmailTemplate(name, email, subject, message);

        // Appel à l'API Resend pour expédier le mail
        const { data, error } = await resend.emails.send({
            from: this.fromEmail,
            to: [this.toEmail],
            subject: `Nouveau message de ${name} - Portfolio`, // Sujet visible dans ta boîte mail
            html: html, // Le template HTML injecté
        });

        // En cas d'erreur de la part de Resend (ex: quota dépassé, domaine bloqué)
        if (error) {
            console.error("❌ Erreur du SDK Resend :", error);
            throw new Error(error.message || "L'envoi a échoué via Resend.");
        }

        // Succès : on retourne les données de confirmation
        return data;
    }

}
