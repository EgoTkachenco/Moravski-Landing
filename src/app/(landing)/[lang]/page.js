import Home from '@/components/views/Home'
import { HomeMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = HomeMetadata

const HomePage = async () => {
  const props = await loadProps()
  return <Home {...props} />
}

export default HomePage

export const getStaticPaths = getStaticPathsForLang

const loadProps = async () => {
  let { default: news } = await import('@/config/news')
  let concerts = await require('@/config/concerts.json')
  return {
    news: news.filter((item) => item.showOnHome).slice(0, 3),
    concerts: concerts.filter((item) => item.showOnHome),
  }
}
