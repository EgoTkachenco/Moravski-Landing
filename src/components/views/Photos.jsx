'use client'
import { List, PageBlock } from '@/common'
import { useText } from '@/locales'

const Photos = ({ photos }) => {
  const t = useText()
  return (
    <PageBlock title={t('photos')} breadcrumbs={['home', 'photos']}>
      <List
        data={photos}
        page={1}
        total={1}
        renderItem={(item) => (
          <ImagePreview src={item.image} title={item.title} />
        )}
      />
    </PageBlock>
  )
}

export default Photos

const ImagePreview = ({ src, title }) => {
  return (
    <img
      src={src}
      alt={title}
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
      }}
    />
  )
}
