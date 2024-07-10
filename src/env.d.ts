/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TELEGRAM_API_KEY: string
  readonly TELEGRAM_CHAT_ID: string
}

interface ImportMeta {
  env: ImportMetaEnv
}
