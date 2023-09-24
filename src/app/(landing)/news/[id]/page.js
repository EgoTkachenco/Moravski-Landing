import NewsDetails from '@/components/views/NewsDetails'
import news from '@/config/news'
import { NewsMetadata } from '@/utils/metadatas'

export const metadata = NewsMetadata

const NewsDetailsPage = async ({ params }) => {
  const one_news = news.find((news) => news.id === params.id)
  return <NewsDetails news={one_news} />
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  return {
    paths: news.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}
