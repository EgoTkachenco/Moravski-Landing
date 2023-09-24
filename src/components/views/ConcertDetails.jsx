import { PageBlock } from '@/common'
import Post from '@/components/blocks/post/Post'

const ConcertDetails = ({ concert }) => {
  return (
    <PageBlock breadcrumbs={['home', 'concert', concert.title]}>
      <Post
        image={concert.image}
        title={concert.title}
        subtitle={concert.date}
        content={concert.content}
      />
    </PageBlock>
  )
}

export default ConcertDetails
