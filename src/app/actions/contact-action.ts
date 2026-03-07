"use server";

type ContactState = {
    success: boolean;
    error?: string;
} | null;

export async function sendContactEmail(
    _prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name || !email || !subject || !message) {
        return { success: false, error: "Veuillez remplir tous les champs." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, error: "Veuillez entrer une adresse email valide." };
    }

    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            // If no API key configured, log and return success for development
            console.log("📧 Contact form submission (Resend not configured):", {
                name,
                email,
                subject,
                message,
            });
            return { success: true };
        }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Portfolio <onboarding@resend.dev>",
                to: ["dina.riani@example.com"], // Replace with actual email
                subject: `[Portfolio] ${subject}`,
                text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Resend error:", errorData);
            return {
                success: false,
                error: "Erreur lors de l'envoi. Veuillez réessayer.",
            };
        }

        return { success: true };
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            error: "Erreur lors de l'envoi. Veuillez réessayer.",
        };
    }
}
