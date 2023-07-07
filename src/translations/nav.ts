import type { Transaltion } from "."

export type NavbarTranslation = {
  switch: {
    label: string
    route: string
  }
  ourWork: string
  team: string
  blog: string
  contact: string
}

export const navbarTranslation: Transaltion<NavbarTranslation> = {
  uk: {
    switch: { label: "Eng", route: "/en" },
    ourWork: "Наші роботи",
    team: "Команда",
    blog: "Блог",
    contact: "Зв'язатися",
  },
  en: {
    switch: { label: "Укр", route: "/uk" },
    ourWork: "Our work",
    team: "Team",
    blog: "Blog",
    contact: "Contact",
  },
}
