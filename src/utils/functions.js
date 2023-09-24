import { langs } from '@/locales'

export async function getStaticPathsForLang() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}
