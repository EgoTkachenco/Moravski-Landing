import { SupportCardBlock } from '@/components/blocks/support/Support'
import { PageBlock, Block } from '@/common'
import {
  AboutChoir,
  AboutGroup,
  AboutStatisticBlock,
  AboutOlenaBlock,
  AboutHistoryBlock,
} from '@/components/blocks/about/About'

const About = () => {
  return (
    <>
      <PageBlock breadcrumbs={['home', 'about-us']}>
        <AboutChoir image="/about2.png" />
      </PageBlock>
      <Block>
        <AboutGroup />
      </Block>
      <AboutStatisticBlock />
      <AboutOlenaBlock />
      <AboutHistoryBlock />
      <SupportCardBlock />
    </>
  )
}

export default About
