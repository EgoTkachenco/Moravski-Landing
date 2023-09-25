import { langs } from '@/locales'
import { format } from 'date-fns'
import { uk } from 'date-fns/locale'

export async function getStaticPathsForLang() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}

export const formatDate = (date, lang) => {
  let formated_date = ''
  if (lang === 'ua') {
    formated_date = format(new Date(date), 'dd MMMM yyyy', {
      locale: uk,
    })
    formated_date += ' o '
    formated_date += format(new Date(date), 'hh:mm', {
      locale: uk,
    })
  } else {
    formated_date = format(new Date(date), 'dd MMMM yyyy')
    formated_date += ' at '
    formated_date += format(new Date(date), 'hh:mm')
  }
  return formated_date
}
