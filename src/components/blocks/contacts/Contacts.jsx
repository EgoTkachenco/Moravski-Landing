'use client'
import styles from './contacts.module.scss'
import { PageBlock, Text, Block } from '@/common'
import { useText } from '@/locales'
import Form from './Form'
import CONFIG from '@/config/config.json'

export const ContactDetails = () => {
  const t = useText()
  return (
    <div className={styles.cards_container}>
      <div className={styles.card} data-aos="fade-up">
        <Text type="h5" className={styles.card_title}>
          {t('concerts')}
        </Text>
        <Text>{t('contact_about_concert')}</Text>
        <div className={styles.card_contacts}>
          <Text className={styles.card_contacts_title}>{t('contacts')}:</Text>
          <Text>{CONFIG.contact_phone}</Text>
          <Text>{CONFIG.contact_concerts_mail}</Text>
        </div>
      </div>

      <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
        <Text type="h5" className={styles.card_title}>
          {t('listening')}
        </Text>
        <Text>{t('contact_about_listening')}</Text>
        <div className={styles.card_contacts}>
          <Text className={styles.card_contacts_title}>{t('contacts')}:</Text>
          <Text>{CONFIG.contact_phone}</Text>
          <Text>{CONFIG.contact_listening_mail}</Text>
        </div>
      </div>

      <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
        <Text type="h5" className={styles.card_title}>
          {t('tour')}
        </Text>
        <Text>{t('contact_about_tour')}</Text>
        <div className={styles.card_contacts}>
          <Text className={styles.card_contacts_title}>{t('contacts')}:</Text>
          <Text>{CONFIG.contact_phone}</Text>
          <Text>{CONFIG.contact_tours_mail}</Text>
        </div>
      </div>
    </div>
  )
}

export const ContactFormBlock = () => {
  const t = useText()
  return (
    <Block innerClassName={styles.contact_card_container}>
      <div className={styles.contact_card} data-aos="fade-up">
        <div className={styles.contact_card_top}>
          <Text type="h3">{t('contact-form-title')}</Text>
          <Text type="h5">{t('contact-form-text')}</Text>
        </div>
        <Form />
      </div>
    </Block>
  )
}

const Contact = () => {
  const t = useText()
  return (
    <PageBlock title={t('contacts')} breadcrumbs={['home', 'contacts']}>
      <ContactDetails />
    </PageBlock>
  )
}

export default Contact
