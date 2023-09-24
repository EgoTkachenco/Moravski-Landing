import Policy from '@/components/views/Policy'

const PolicyPage = () => <Policy />

export default PolicyPage

import { langs } from '@/locales'

export async function getStaticPaths() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false, // can also be true or 'blocking'
  }
}
