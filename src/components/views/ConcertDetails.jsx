import { PageBlock } from '@/common'
import Post from '@/components/blocks/post/Post'
import MoreConcerts from '@/components/blocks/concerts/MoreConcerts'

const ConcertDetails = ({ concert }) => {
  return (
    <>
      <PageBlock breadcrumbs={['home', 'concerts', concert.title]}>
        <Post
          image={concert.image}
          title={concert.title}
          subtitle={concert.date}
          content={concert.content}
        />
      </PageBlock>

      <MoreConcerts />
    </>
  )
}

export default ConcertDetails
