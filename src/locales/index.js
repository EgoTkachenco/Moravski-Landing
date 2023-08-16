import { useRouter, useParams, usePathname } from 'next/navigation'
import en from './en'
import ua from './ua'

const translations = {
  en,
  ua,
}

export const defaultLang = 'ua'
export const langs = Object.keys(translations)

export const useLang = () => {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const langId = params?.lang

  const setLang = (lang) => {
    const current = langId || defaultLang
    const langInPath = pathname.search(current) !== -1

    let newRoute = pathname

    if (langInPath) newRoute = newRoute.replace('/' + current, '/' + lang)
    else newRoute = '/' + lang + newRoute

    newRoute = newRoute.replace('/' + defaultLang, '')

    router.push(newRoute || '/')
  }

  return { lang: langId || defaultLang, setLang }
}
export const useText = () => {
  const { lang } = useLang()
  return (key) => {
    return translations[lang || defaultLang][key] !== undefined
      ? translations[lang || defaultLang][key]
      : key
  }
}

export const getStaticLanguagesPath = () => {}
