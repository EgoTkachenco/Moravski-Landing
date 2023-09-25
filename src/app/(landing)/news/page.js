import News from '@/components/views/News'
import { NewsMetadata } from '@/utils/metadatas'

export const metadata = NewsMetadata

const NewsPage = async () => {
  return <News />
}

export default NewsPage
