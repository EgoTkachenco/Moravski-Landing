'use client'
import styles from './contacts.module.scss'
import { PageBlock, Text, Block } from '@/common'
import { useText } from '@/locales'
import Form from './form'

export const ContactDetails = () => {
  const t = useText()
  return (
    <div className={styles.cards_container}>
      <div className={styles.card} data-aos="fade-up">
        <Text type="h5" className={styles.card_title}>
          Концерти
        </Text>
        <Text>Звʼяжіться з нами на рахунок концертів</Text>
        <div className={styles.card_contacts}>
          <Text className={styles.card_contacts_title}>Контакти:</Text>
          <Text>+380681234567</Text>
          <Text>concerts@moravski.com.ua</Text>
        </div>
      </div>

      <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
        <Text type="h5" className={styles.card_title}>
          Прослуховування
        </Text>
        <Text>Щоб записатись на прослуховування</Text>
        <div className={styles.card_contacts}>
          <Text className={styles.card_contacts_title}>Контакти:</Text>
          <Text>+380681234567</Text>
          <Text>sing@moravski.com.ua</Text>
        </div>
      </div>

      <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
        <Text type="h5" className={styles.card_title}>
          Гастролі
        </Text>
        <Text>Щоб обговорити деталі наших гастролей</Text>
        <div className={styles.card_contacts}>
          <Text className={styles.card_contacts_title}>Контакти:</Text>
          <Text>+380681234567</Text>
          <Text>tours@moravski.com.ua</Text>
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
