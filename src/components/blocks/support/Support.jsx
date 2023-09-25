'use client'
import { useState } from 'react'
import styles from './support.module.scss'
import { Text, Button, Input, Block, Link } from '@/common'
import { useText } from '@/locales'
import routes from '@/utils/routes'
import Form from './Form'
import CONFIG from '@/config/config'

const AMOUNTS = [50, 100, 200, 500, 1000]

const Support = () => {
  const t = useText()
  const [type, setType] = useState('month') // 'month' or 'once'
  const [amount, setAmount] = useState(AMOUNTS[0])
  const [isCustomAmount, setIsCustomAmount] = useState(false)
  const onAmountChange = (amount) => {
    setAmount(Number(amount))
    setIsCustomAmount(false)
  }

  const onSubmit = (values) => {
    console.log(values, type, amount)
  }

  return (
    <div className={styles.container}>
      <Text type="h5">{t('support-description')}</Text>
      <div className={styles.form_container}>
        <div className={styles.form}>
          <div className={styles.form_top}>
            <div className={styles.form_top_left}>
              {['month', 'once'].map((item) => (
                <Button
                  color={type === item ? 'yellow' : 'white'}
                  key={item}
                  onClick={() => setType(item)}
                >
                  {t(`${item}-support`)}
                </Button>
              ))}
            </div>
            <div className={styles.form_top_right}>
              {AMOUNTS.map((item) => (
                <Button
                  color={amount === item ? 'yellow' : 'white'}
                  key={item}
                  onClick={() => onAmountChange(item)}
                >
                  {item} {t('uah-currency')}
                </Button>
              ))}
              {!isCustomAmount ? (
                <Button color="white" onClick={() => setIsCustomAmount(true)}>
                  Інша сума
                </Button>
              ) : (
                <Input
                  placeholder="Enter Amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0"
                  max="999999"
                />
              )}
            </div>
          </div>

          <Form onSubmit={onSubmit} />
        </div>

        <RequisitesInfo />
      </div>
    </div>
  )
}

export default Support

const RequisitesInfo = () => {
  const t = useText()
  return (
    <div className={styles.form_info}>
      <div className={styles.form_info_title}>{t('support-info-title')}</div>
      <div className={styles.form_info_label}>
        {t('support-info-name-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-name-value')}
      </div>
      <div className={styles.form_info_label}>
        {t('support-info-code-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-code-value')}
      </div>
      <div className={styles.form_info_label}>
        {t('support-info-account-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-account-value')}
      </div>
      <div className={styles.form_info_label}>
        {t('support-info-bank-label')}:
      </div>
      <div className={styles.form_info_text}>
        {t('support-info-bank-value')}
      </div>
    </div>
  )
}

const SupportCard = () => {
  const t = useText()
  return (
    <div className={styles.support_card} data-aos="fade-up">
      <Text type="h3" className={styles.support_card_title}>
        {t('support-card-text')}
      </Text>
      <div className={styles.support_card_buttons}>
        <Link href={routes['support-us']}>
          <Button color="yellow" data-aos="fade-up" data-aos-delay="150">
            {t('support-us')}
          </Button>
        </Link>
        <Link href={CONFIG.support.buy_me_a_coffee} external>
          <Button color="white" data-aos="fade-up" data-aos-delay="300">
            <img
              src="/icons/buymeacoffee.svg"
              width="15px"
              height="14px"
              alt="UA"
            />
            Buy Me a Coffee
          </Button>
        </Link>
        <Link href={CONFIG.support.support_ukraine} external>
          <Button data-aos="fade-up" data-aos-delay="450">
            <img src="/icons/ua.svg" width="20px" height="20px" alt="UA" />
            Support Ukraine
          </Button>
        </Link>
      </div>
    </div>
  )
}

export const SupportCardBlock = () => {
  return (
    <Block>
      <SupportCard />
    </Block>
  )
}
