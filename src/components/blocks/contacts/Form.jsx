'use client'
import styles from './contacts.module.scss'
import { Input, Button, Checkbox } from '@/common'
import { useForm } from '@mantine/form'
import { useText } from '@/locales'

const Form = ({ onSubmit }) => {
  const t = useText()
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      isAgree: false,
    },

    validate: {
      name: (value) => {
        if (!value) return 'Name required'
        return null
      },
      email: (value) => {
        if (!value) return 'Email required'
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email'
        return null
      },
      message: (value) => {
        if (!value) return 'Message required'
        return null
      },
      isAgree: (value) => {
        if (!value) return 'Required'
        return null
      },
    },
  })
  const onFormSubmit = form.onSubmit((values) => {
    console.log(values)
    onSubmit(values)
  })
  return (
    <form onSubmit={onFormSubmit} className={styles.contact_card_form}>
      <Input
        label={t('contact-form-name-label')}
        placeholder={t('contact-form-name-placeholder')}
        {...form.getInputProps('name')}
      />
      <Input
        label={t('contact-form-phone-label')}
        placeholder={t('contact-form-phone-placeholder')}
        {...form.getInputProps('phone')}
      />
      <Input
        label={t('contact-form-mail-label')}
        placeholder={t('contact-form-mail-placeholder')}
        {...form.getInputProps('email')}
      />
      <Input
        label={t('contact-form-message-label')}
        placeholder={t('contact-form-message-placeholder')}
        {...form.getInputProps('message')}
      />
      <Button color="yellow">{t('contact-form-send')}</Button>

      <Checkbox
        label={t('contact-form-agree')}
        {...form.getInputProps('isAgree')}
      />
    </form>
  )
}

export default Form
