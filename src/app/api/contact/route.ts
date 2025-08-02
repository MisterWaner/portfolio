import { Resend } from "resend";
import ContactTemplate from "@/components/emails/ContactTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { firstName, name, email, phone, message } = body;

        const response = await resend.emails.send({
            from: 'Formulaire de contact portfolio <onboarding@resend.dev>',
            to: process.env.CONTACT_RECEIVER!,
            subject: `Nouveau message de ${firstName} ${name}`,
            react: ContactTemplate({
                firstName,
                name,
                email,
                phone,
                message,
            }),
        });

        if (!response) {
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}