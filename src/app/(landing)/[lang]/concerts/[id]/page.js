import ConcertDetails from '@/components/views/ConcertDetails'
import { ConcertsMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'
import { getConcerts, getConcert } from '@/utils/api'

export const metadata = ConcertsMetadata

const NewsDetailsPage = async ({ params: { id, lang } }) => {
  const concert = await getConcert(id, lang === 'en')
  return <ConcertDetails concert={concert} />
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  const concerts = await getConcerts(1, false)
  const concerts_en = await getConcerts(1, true)
  return {
    paths: [
      ...concerts.data.map((concert) => ({
        params: { id: concert.slug, lang: 'ua' },
      })),
      ...concerts_en.data.map((concert) => ({
        params: { id: concert.slug, lang: 'en' },
      })),
    ],
    fallback: false,
  }
}
