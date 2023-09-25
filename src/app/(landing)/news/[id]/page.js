import NewsDetails from '@/components/views/NewsDetails'
import { getNews, getNewsDetails } from '@/utils/api'
import { NewsMetadata } from '@/utils/metadatas'

export const metadata = NewsMetadata

const NewsDetailsPage = async ({ params: { id } }) => {
  const one_news = await getNewsDetails(id, false)
  return <NewsDetails news={one_news} />
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  const news = await getNews()
  return {
    paths: news.data.map(({ id }) => ({ params: { id } })),
    fallback: false,
  }
}
