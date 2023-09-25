import ConcertDetails from '@/components/views/ConcertDetails'
import { getConcert, getConcerts } from '@/utils/api'
import { ConcertsMetadata } from '@/utils/metadatas'

export const metadata = ConcertsMetadata

const NewsDetailsPage = async ({ params: { id } }) => {
  const concert = await getConcert(id, false)
  return <ConcertDetails concert={concert} />
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  // SOME BUG WITH UA slug (returns en slug)
  const concerts = await getConcerts(1, true)
  return {
    paths: concerts.data.map(({ slug }) => ({ params: { id: slug } })),
    fallback: false,
  }
}
