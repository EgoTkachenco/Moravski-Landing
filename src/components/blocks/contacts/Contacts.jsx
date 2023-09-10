'use client'
import styles from './contacts.module.scss'
import { Block, BlockTop } from '@/common/block/Block'
import { Text, Breadcrumbs } from '@/common'
import { useText } from '@/locales'

const Contacts = () => {
  const t = useText()
  return (
    <Block innerClassName={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'home', href: '/' },
          { title: 'contacts', href: '/contacts' },
        ]}
      />
      <BlockTop title={t('contacts')} />
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

        <div className={styles.card} data-aos="fade-up">
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

        <div className={styles.card} data-aos="fade-up">
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
    </Block>
  )
}

export default Contacts
