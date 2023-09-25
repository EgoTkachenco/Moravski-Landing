import About from '@/components/views/About'
import { AboutMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = AboutMetadata

const AboutPage = () => <About />

export default AboutPage

export const getStaticPaths = getStaticPathsForLang
