import type { Params } from "astro"
import { Language, defaultLang, languages } from "."

export function getStaticPaths() {
  return languages.map((lang) => ({
    params: { lang },
  }))
}

export function getLang(params: Params): Language {
  const language = params.lang ?? defaultLang
  return language as Language
}
