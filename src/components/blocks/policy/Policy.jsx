'use client'
import styles from './policy.module.scss'
import { Text, PageBlock } from '@/common'
import { useText } from '@/locales'

const Policy = () => {
  const t = useText()
  return (
    <PageBlock breadcrumbs={['home', 'policy']} title={t('policy')}>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text1')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title2')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text2')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title3')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text3')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title4')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text4')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title5')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text5')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title6')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text6')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title7')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text7')}
      </Text>

      <Text type="h5" className={styles.bold_text} data-aos="fade-up">
        {t('policy.title8')}
      </Text>
      <Text className={styles.text} data-aos="fade-up">
        {t('policy.text8')}
      </Text>
    </PageBlock>
  )
}

export default Policy
