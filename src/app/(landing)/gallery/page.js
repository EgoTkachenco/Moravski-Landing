import Photos from '@/components/views/Photos'
import { PhotosMetadata } from '@/utils/metadatas'

export const metadata = PhotosMetadata

const PhotosPage = async () => {
  const photos = await require('@/config/photos.json')
  return <Photos photos={photos} />
}

export default PhotosPage
