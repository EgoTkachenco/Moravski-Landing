import News from '@/components/views/News'
import { NewsMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = NewsMetadata

const NewsPage = () => {
  return <News />
}

export default NewsPage

export const getStaticPaths = getStaticPathsForLang
