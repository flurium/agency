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

function response(status: number, message?: string) {
  return new Response(message ? JSON.stringify({ message }) : null, { status })
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
    if (!data) return response(400)

    const text = `New person want to contact us!\nName: ${data.name}\nEmail: ${data.email}\nContext: ${data.context}`
    const ok = await sendMessage(text)

    if (ok) {
      return response(200)
    }

    return response(500)
  } catch (error) {
    return response(500)
  }
}
