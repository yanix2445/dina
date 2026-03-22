import { NextRequest, NextResponse } from "next/server";
import { MailService } from "@/features/mail/services/mail.service";
import { contactSchema } from "@/features/mail/schemas/contact.schema";

/**
 * API Route: /api/contact
 * Handles contact form submissions with validation and MailService delegation
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // 1. Validation with Zod
        const validated = contactSchema.safeParse(body);
        
        if (!validated.success) {
            return NextResponse.json({ 
                success: false, 
                error: validated.error.issues[0].message 
            }, { status: 400 });
        }

        // 2. Process with Mail Service
        await MailService.sendContactEmail(validated.data);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("❌ API Contact Error:", error);
        return NextResponse.json({ 
            success: false, 
            error: "Une erreur est survenue lors de l'envoi de votre message." 
        }, { status: 500 });
    }
}
