import Concerts from '@/components/views/Concerts'
import { ConcertsMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = ConcertsMetadata

const ConcertsPage = () => {
  return <Concerts />
}

export default ConcertsPage

export const getStaticPaths = getStaticPathsForLang
