import Support from '@/components/views/Support'
import { getStaticPathsForLang } from '@/utils/functions'

const SupportPage = () => <Support />

export default SupportPage

export const getStaticPaths = getStaticPathsForLang
