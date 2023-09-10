'use client'
import styles from './policy.module.scss'
import { Text, Breadcrumbs } from '@/common'
import { Block } from '@/common/block/Block'
import { useText } from '@/locales'

const Policy = () => {
  const t = useText()
  return (
    <Block innerClassName={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'home', href: '/' },
          { title: 'policy', href: '/policy' },
        ]}
      />
      <Text type="h3" className={styles.title}>
        {t('policy')}
      </Text>

      <Text className={styles.text}>{t('policy.text1')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title2')}
      </Text>
      <Text className={styles.text}>{t('policy.text2')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title3')}
      </Text>
      <Text className={styles.text}>{t('policy.text3')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title4')}
      </Text>
      <Text className={styles.text}>{t('policy.text4')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title5')}
      </Text>
      <Text className={styles.text}>{t('policy.text5')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title6')}
      </Text>
      <Text className={styles.text}>{t('policy.text6')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title7')}
      </Text>
      <Text className={styles.text}>{t('policy.text7')}</Text>

      <Text type="h5" className={styles.bold_text}>
        {t('policy.title8')}
      </Text>
      <Text className={styles.text}>{t('policy.text8')}</Text>
    </Block>
  )
}

export default Policy
