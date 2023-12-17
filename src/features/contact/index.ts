import * as v from "valibot"

export type ContactFormData = {
  name: { value: string; error: null } | { value: null; error: string }
  email: { value: string; error: null } | { value: null; error: string }
  communication: string
  context: string
}

export function validateContactFormData(form: FormData): ContactFormData {
  const name = form.get("name")
  const nameValidation = v.safeParse(v.string("Name is required", [v.minLength(1)]), name)

  const email = form.get("email")
  const emailValidation = v.safeParse(
    v.string("Email is incorrect", [v.minLength(1), v.email()]),
    email
  )
  const communication = form.get("communication")
  const context = form.get("context")

  return {
    name: nameValidation.success
      ? { value: nameValidation.output, error: null }
      : { value: null, error: nameValidation.issues[0].message },
    email: emailValidation.success
      ? { value: emailValidation.output, error: null }
      : { value: null, error: emailValidation.issues[0].message },
    communication: (communication ?? "") as string,
    context: (context ?? "") as string
  }
}

export async function sendMessage(message: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${import.meta.env.TELEGRAM_API_KEY}/sendMessage`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          chat_id: `${import.meta.env.TELEGRAM_CHAT_ID}`,
          text: message
        })
      }
    )

    return res.ok
  } catch {
    return false
  }
}
