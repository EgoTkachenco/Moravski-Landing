import Home from '@/components/views/Home'
import { getConcerts, getNews } from '@/utils/api'
import { HomeMetadata } from '@/utils/metadatas'

export const metadata = HomeMetadata

const HomePage = async () => {
  const props = await loadProps()
  return <Home {...props} />
}

export default HomePage

const loadProps = async () => {
  let news = await getNews()
  let concerts = await getConcerts()
  return {
    news: news.data.filter((item) => item.showOnHome).slice(0, 3),
    concerts: concerts.data.slice(0, 6),
  }
}
