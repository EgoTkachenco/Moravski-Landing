import BannerBlock from '@/components/blocks/banner/Banner'
import {
  AboutChoirBlock,
  AboutGroupBlock,
  AboutStatisticBlock,
  AboutOlenaBlock,
} from '@/components/blocks/about/About'
import ConcertsPreviewBlock from '@/components/blocks/concerts/ConcertsPreview'
import { SupportCardBlock } from '@/components/blocks/support/Support'
import { NewsPreviewBlock } from '@/components/blocks/news/News'
import { ContactFormBlock } from '@/components/blocks/contacts/Contacts'

const Home = ({ news, concerts }) => {
  return (
    <>
      <BannerBlock />
      <AboutChoirBlock />
      <AboutGroupBlock />
      <AboutStatisticBlock />
      <AboutOlenaBlock />
      <ConcertsPreviewBlock concerts={concerts} />
      <SupportCardBlock />
      <NewsPreviewBlock news={news} />
      <ContactFormBlock />
    </>
  )
}

export default Home
