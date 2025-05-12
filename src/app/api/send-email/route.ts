
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, correo, asunto, mensaje } = await req.json();

    const { data, error }  = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gabriel.soliz@inacapmail.cl',
      subject: asunto,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
      `,
    });
    if (error) {
      console.error("Error al enviar el correo:", error);
      return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Correo enviado con éxito', data });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
  }
}
