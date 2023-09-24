import ConcertDetails from '@/components/views/ConcertDetails'
import concerts from '@/config/concerts.json'
import { ConcertsMetadata } from '@/utils/metadatas'

export const metadata = ConcertsMetadata

const NewsDetailsPage = async ({ params }) => {
  const concert = concerts.find((concert) => concert.id === params.id)
  // return <ConcertDetails concert={concert} />
  return 'Concert'
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    // concerts.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}
