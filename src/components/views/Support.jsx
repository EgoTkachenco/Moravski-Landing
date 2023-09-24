'use client'
import { PageBlock } from '@/common'
import { useText } from '@/locales'
import SupportBlock from '../blocks/support/Support'

const Support = () => {
  const t = useText()
  return (
    <PageBlock title={t('want-support')} breadcrumbs={['home', 'support-us']}>
      <SupportBlock />
    </PageBlock>
  )
}

export default Support
