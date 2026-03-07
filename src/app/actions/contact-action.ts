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

        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF6F0; padding: 40px 20px; margin: 0; color: #1C1815;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E8D5A3; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        <div style="background-color: #1C1815; padding: 40px 30px; text-align: center;">
            <h1 style="color: #FEFCF8; margin: 0; font-size: 24px; font-weight: 500;">Nouveau Message</h1>
            <p style="color: #9A9088; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px;">Depuis le Portfolio BUT GEA</p>
        </div>
        
        <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 6px 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #C9A84C;">Expéditeur</p>
                <p style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #1C1815;">${name}</p>
                <a href="mailto:${email}" style="color: #6B6058; text-decoration: none; font-size: 14px; border-bottom: 1px solid #E8D5A3; padding-bottom: 2px;">${email}</a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #FAF6F0; margin: 30px 0;">
            
            <div style="margin-bottom: 30px;">
               <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #C9A84C;">Objet : ${subject}</p>
               <div style="background-color: #FEFCF8; border-left: 3px solid #C9A84C; padding: 24px;">
                   <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3D3530; white-space: pre-wrap;">${message}</p>
               </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #C9A84C; color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 30px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px;">Répondre</a>
            </div>
        </div>
        
        <div style="background-color: #FAFAF9; padding: 20px; text-align: center; border-top: 1px solid #FAF6F0;">
            <p style="margin: 0; font-size: 11px; color: #9A9088;">Le monde appartient à ceux qui se lèvent tôt. ☕️</p>
        </div>
    </div>
</body>
</html>
`;

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Portfolio Dina <contact@yanis-harrat.com>",
                to: ["dinariani258@gmail.com"], // L'email de destination officiel
                subject: `Nouveau message de ${name} - Portfolio`,
                html: htmlTemplate,
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
