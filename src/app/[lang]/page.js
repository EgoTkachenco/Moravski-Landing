import Home from '@/components/views/Home'

const HomePage = () => <Home />

export default HomePage

import { langs } from '../../locales'

export async function getStaticPaths() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {
  return { props: {} }
}
