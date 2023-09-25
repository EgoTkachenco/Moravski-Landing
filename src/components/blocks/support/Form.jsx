'use client'
import styles from './support.module.scss'
import { Input, Button, Text } from '@/common'
import { useForm } from '@mantine/form'
import { useText } from '@/locales'

const Form = ({ onSubmit }) => {
  const t = useText()
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },

    validate: {
      name: (value) => {
        if (!value) return t('contact-form-name-error')
        return null
      },
      email: (value) => {
        if (!value) return t('contact-form-mail-error')
        if (!/^\S+@\S+$/.test(value))
          return t('contact-form-mail-error-invalid')
        return null
      },
    },
  })
  const onFormSubmit = form.onSubmit((values) => {
    console.log(values)
    onSubmit(values)
  })
  return (
    <form onSubmit={onFormSubmit} className={styles.form_bottom}>
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

      <Button color="yellow">{t('contact-form-send')}</Button>

      <Text className={styles.form_bottom_deactivate}>
        {t('support-disable')}
      </Text>
    </form>
  )
}

export default Form
