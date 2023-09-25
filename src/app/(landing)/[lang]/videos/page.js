import Videos from '@/components/views/Videos'
import { VideosMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = VideosMetadata

const VideosPage = async () => {
  const videos = await require('@/config/videos.json')
  return <Videos videos={videos} />
}

export default VideosPage

export const getStaticPaths = getStaticPathsForLang
