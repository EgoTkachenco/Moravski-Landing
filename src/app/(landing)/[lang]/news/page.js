import News from '@/components/views/News'
import news from '@/config/news'
import { NewsMetadata } from '@/utils/metadatas'

export const metadata = NewsMetadata

const NewsPage = async () => {
  return <News news={news} />
}
export default NewsPage

import { langs } from '@/locales'

export async function getStaticPaths() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false,
  }
}
