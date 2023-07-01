import type { APIRoute } from "astro"
import { z } from "zod"

// to make on server
export const prerender = false

// validation
const contactInfoSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim(),
  context: z.string().trim(),
})

type ContactInfo = z.infer<typeof contactInfoSchema>

async function validate(input: any): Promise<ContactInfo | null> {
  const body = await contactInfoSchema.safeParseAsync(input)
  return body.success ? body.data : null
}

function response(message: string, status: number) {
  return new Response(JSON.stringify({ message }), { status })
}

async function sendMessage(message: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${import.meta.env.TELEGRAM_API_KEY}/sendMessage`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          chat_id: `${import.meta.env.TELEGRAM_CHAT_ID}`,
          text: message,
        }),
      }
    )

    return res.ok
  } catch {
    return false
  }
}

export const post: APIRoute = async ({ request }) => {
  try {
    const json = await request.json()
    const data = await validate(json)
    if (!data) return response("Request body doesn't match required schema.", 400)

    const text = `New person want to contact us!\nName: ${data.name}\nEmail: ${data.email}\nContext: ${data.context}`
    const ok = await sendMessage(text)

    if (ok) {
      return response(
        "Your contact information is sent successfully. We will contact you as soon as possible.",
        200
      )
    }

    return response(
      "Sending service can't be used right now. Please try later or email us.",
      500
    )
  } catch (error) {
    return response("Can't send contact data right now! Please try later.", 500)
  }
}
