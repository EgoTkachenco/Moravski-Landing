import Contacts from '@/components/views/Contacts'

const ContactsPage = () => <Contacts />

export default ContactsPage

import { langs } from '@/locales'

export async function getStaticPaths() {
  return {
    paths: langs.map((lang) => ({ params: { lang } })),
    fallback: false, // can also be true or 'blocking'
  }
}
