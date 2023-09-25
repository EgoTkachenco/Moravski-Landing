import Contacts from '@/components/views/Contacts'
import { ContactsMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = ContactsMetadata

const ContactsPage = () => <Contacts />

export default ContactsPage

export const getStaticPaths = getStaticPathsForLang
