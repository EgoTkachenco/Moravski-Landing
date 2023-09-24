import News from '@/components/views/News'
import news from '@/config/news'
import { NewsMetadata } from '@/utils/metadatas'

export const metadata = NewsMetadata

const NewsPage = async () => {
  return <News news={news} />
}

export default NewsPage
