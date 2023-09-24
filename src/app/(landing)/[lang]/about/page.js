import About from '@/components/views/About'

const AboutPage = () => <About />

export default AboutPage

import { langs } from '@/locales'

export async function getStaticPaths() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false, // can also be true or 'blocking'
  }
}
