import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false; // Forzar que este endpoint se ejecute en el servidor

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Validar que la petición sea JSON
    const contentType = request.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ error: 'El formato de solicitud debe ser JSON' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validaciones básicas de campos
    if (!name || !name.trim()) {
      return new Response(
        JSON.stringify({ error: 'El nombre es obligatorio' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Por favor, proporciona un correo de contacto válido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!message || !message.trim()) {
      return new Response(
        JSON.stringify({ error: 'El mensaje no puede estar vacío' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Obtener la API Key de Resend de forma segura en el servidor
    const resendApiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    
    // Si la llave sigue siendo el valor por defecto o no está configurada, avisar con un error claro
    if (!resendApiKey || resendApiKey === 're_tu_llave_aqui') {
      console.error('[Resend Error]: RESEND_API_KEY no está configurada en las variables de entorno (.env)');
      return new Response(
        JSON.stringify({ error: 'El servidor de correo no está configurado (Llave API ausente)' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Inicializar Resend y realizar el envío
    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: 'info@send.rogeliolb.dev',
      to: 'rogelio20052011@gmail.com', // Cuenta personal de Rogelio confirmada
      subject: `Nuevo mensaje de ${name} | Portafolio`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 25px; color: #1F2937; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 12px; background-color: #FFFFFF; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <h2 style="color: #6D28D9; border-bottom: 2px dashed #F3EAFF; padding-bottom: 12px; margin-top: 0; font-size: 22px;">📬 Nuevo Mensaje de Contacto</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4B5563; width: 120px;">Nombre:</td>
              <td style="padding: 6px 0; color: #1F2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4B5563;">Contacto:</td>
              <td style="padding: 6px 0; color: #1F2937;"><a href="mailto:${email}" style="color: #7C3AED; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #4B5563; margin-bottom: 8px;">Mensaje / Propuesta:</p>
            <div style="background-color: #F9FAFB; padding: 15px 20px; border-left: 4px solid #7C3AED; border-radius: 6px; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 25px 0;" />
          <p style="font-size: 11px; color: #9CA3AF; text-align: center; margin-bottom: 0;">Este correo fue enviado de forma segura utilizando Resend desde tu portafolio personal.</p>
        </div>
      `,
      replyTo: email, // Permite responder al visitante con un solo clic
    });

    if (error) {
      console.error('[Resend Error Details]:', error);
      return new Response(
        JSON.stringify({ error: error.message || 'Error al enviar a través de Resend' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, messageId: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('[API Error]:', err);
    return new Response(
      JSON.stringify({ error: err.message || 'Error interno del servidor al procesar el correo' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
