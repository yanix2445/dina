/**
 * Contact Email Template
 * Separated from service logic for better maintainability
 */

export const getContactEmailTemplate = (name: string, email: string, subject: string, message: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF6F0; padding: 40px 20px; margin: 0; color: #1C1815;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E8D5A3; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04);">
        <!-- Header -->
        <div style="background-color: #1C1815; padding: 48px 40px; text-align: center;">
            <div style="display: inline-block; padding: 12px 24px; border: 1px solid #C9A84C; border-radius: 4px; margin-bottom: 24px;">
                <span style="color: #C9A84C; font-size: 14px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase;">DINA RIANI</span>
            </div>
            <h1 style="color: #FEFCF8; margin: 0; font-size: 26px; font-weight: 500; letter-spacing: -0.02em;">Nouveau Message</h1>
            <p style="color: #9A9088; margin: 12px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Portfolio Professionnel — BUT GEA</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 48px 40px;">
            <div style="margin-bottom: 40px;">
                <p style="margin: 0 0 8px 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #C9A84C;">Détails de l'expéditeur</p>
                <p style="margin: 0 0 6px 0; font-size: 20px; font-weight: 600; color: #1C1815;">${name}</p>
                <a href="mailto:${email}" style="color: #6B6058; text-decoration: none; font-size: 15px; border-bottom: 1px solid #E8D5A3; padding-bottom: 2px;">${email}</a>
            </div>
            
            <div style="height: 1px; background-color: #FAF6F0; margin: 40px 0;"></div>
            
            <div style="margin-bottom: 40px;">
               <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #C9A84C;">Sujet : ${subject}</p>
               <div style="background-color: #FEFCF8; border-left: 2px solid #C9A84C; padding: 32px; border-radius: 0 12px 12px 0;">
                   <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #3D3530; white-space: pre-wrap;">${message}</p>
               </div>
            </div>
            
            <div style="text-align: center; margin-top: 48px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #1C1815; color: #FFFFFF; text-decoration: none; padding: 18px 40px; border-radius: 100px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; transition: all 0.3s ease;">Répondre par Email</a>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #FAFAF9; padding: 24px; text-align: center; border-top: 1px solid #FAF6F0;">
            <p style="margin: 0; font-size: 11px; color: #9A9088; letter-spacing: 0.5px;">Ce message vous a été envoyé via le portail professionnel de Dina Riani.</p>
        </div>
    </div>
</body>
</html>
    `;
};
