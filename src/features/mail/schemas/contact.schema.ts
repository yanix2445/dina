import { z } from "zod";

/**
 * Schéma de validation Zod pour le formulaire de contact.
 * Permet de vérifier que les données saisies par l'utilisateur sont propres,
 * sécurisées et conformes avant de les envoyer par email.
 */
export const contactSchema = z.object({
  // Le nom expéditeur
  name: z
    .string()
    .trim() // Enlève les espaces inutiles au début et à la fin
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  
  // L'adresse e-mail
  email: z
    .string()
    .trim()
    .toLowerCase() // Normalise l'email en minuscules
    .email("Veuillez entrer une adresse email valide") // Validation stricte du format email
    .max(150, "L'email ne peut pas dépasser 150 caractères"),
  
  // Le sujet de la prise de contact
  subject: z
    .string()
    .trim()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(150, "Le sujet ne peut pas dépasser 150 caractères"),
  
  // Le corps du message
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(5000, "Le message ne peut pas dépasser 5000 caractères"),
  
  // La case à cocher RGPD (doit obligatoirement être "on")
  // Le .literal force la valeur exacte attendue
  gdpr_consent: z.literal("on", {
    message: "Vous devez accepter la politique de confidentialité",
  }),
}).strict(); // .strict() rejette toute propriété imprévue envoyée par des bots


// Exporte le type TypeScript généré automatiquement à partir de ce schéma Zod
export type ContactFormData = z.infer<typeof contactSchema>;
