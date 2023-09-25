import Policy from '@/components/views/Policy'
import { PolicyMetadata } from '@/utils/metadatas'
import { getStaticPathsForLang } from '@/utils/functions'

export const metadata = PolicyMetadata

const PolicyPage = () => <Policy />

export default PolicyPage

export const getStaticPaths = getStaticPathsForLang
