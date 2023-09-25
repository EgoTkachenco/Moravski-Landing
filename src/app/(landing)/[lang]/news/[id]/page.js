import NewsDetails from '@/components/views/NewsDetails'
import { getNews, getNewsDetails } from '@/utils/api'
import { getStaticPathsForLang } from '@/utils/functions'
import { NewsMetadata } from '@/utils/metadatas'

export const metadata = NewsMetadata

const NewsDetailsPage = async ({ params: { id, lang } }) => {
  const one_news = await getNewsDetails(id, lang === 'en')
  return <NewsDetails news={one_news} />
}

export default NewsDetailsPage

export const getStaticPaths = async () => {
  const paths = await getStaticPathsForLang()
  const news = await getNews()
  return {
    paths: paths.paths.reduce(
      (acc, { params: { lang } }) => [
        ...acc,
        ...news.data.map(({ id }) => ({
          params: { id, lang },
        })),
      ],
      []
    ),
    fallback: false,
  }
}
