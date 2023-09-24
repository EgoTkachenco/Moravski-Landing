import Concerts from '@/components/views/Concerts'
import { ConcertsMetadata } from '@/utils/metadatas'
import concerts from '@/config/concerts.json'

export const metadat = ConcertsMetadata

const ConcertsPage = async () => {
  return <Concerts concerts={concerts} />
}

export default ConcertsPage
