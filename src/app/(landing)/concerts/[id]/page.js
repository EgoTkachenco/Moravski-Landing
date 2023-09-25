import ConcertDetails from '@/components/views/ConcertDetails'
import { getConcert, getConcerts } from '@/utils/api'
import { ConcertsMetadata } from '@/utils/metadatas'

export const metadata = ConcertsMetadata

const NewsDetailsPage = async ({ params }) => {
  const concert = await getConcert(params.id)
  return <ConcertDetails concert={concert} />
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  const concerts = await getConcerts()
  return {
    paths: concerts.data.map(({ slug }) => ({ params: { id: slug } })),
    fallback: false,
  }
}
