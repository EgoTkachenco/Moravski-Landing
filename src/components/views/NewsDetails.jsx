import { PageBlock } from '@/common'
import Post from '@/components/blocks/post/Post'

const NewsDetails = ({ news }) => {
  return (
    <PageBlock breadcrumbs={['home', 'news', news.title]}>
      <Post
        image={news.image}
        title={news.title}
        subtitle={news.date}
        content={news.content}
      />
    </PageBlock>
  )
}

export default NewsDetails
