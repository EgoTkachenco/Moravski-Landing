'use client'
import { List, PageBlock } from '@/common'
import { useText } from '@/locales'

const Videos = ({ videos }) => {
  const t = useText()
  return (
    <PageBlock title={t('videos')} breadcrumbs={['home', 'videos']}>
      <List
        data={videos}
        page={1}
        total={1}
        renderItem={(item) => (
          <ImagePreview src={item.image} title={item.title} />
        )}
      />
    </PageBlock>
  )
}

export default Videos

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
