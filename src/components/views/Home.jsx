import BannerBlock from '@/components/blocks/banner/Banner'
import AboutBlock from '@/components/blocks/about/About'
import AboutGroupBlock from '@/components/blocks/about-group/AboutGroup'
import ConcertsPreviewBlock from '@/components/blocks/concerts-preview/ConcertsPreview'
import SupportBlock from '@/components/blocks/support/Support'
import NewsPreviewBlock from '@/components/blocks/news-preview/NewsPreview'
import ContactBlock from '@/components/blocks/contact/Contact'

const Home = () => {
  return (
    <>
      <BannerBlock />
      <AboutBlock />
      <AboutGroupBlock />
      <ConcertsPreviewBlock />
      <SupportBlock />
      <NewsPreviewBlock />
      <ContactBlock />
    </>
  )
}

export default Home
