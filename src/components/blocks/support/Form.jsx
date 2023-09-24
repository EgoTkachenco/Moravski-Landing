'use client'
import styles from './support.module.scss'
import { Input, Button, Text } from '@/common'
import { useForm } from '@mantine/form'

const Form = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
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
    },
  })
  const onFormSubmit = form.onSubmit((values) => {
    console.log(values)
    onSubmit(values)
  })
  return (
    <form onSubmit={onFormSubmit} className={styles.form_bottom}>
      <Input
        label="Ім'я"
        placeholder="Введіть ваше імʼя"
        {...form.getInputProps('name')}
      />
      <Input
        label="Телефон"
        placeholder="Введіть ваш телефон"
        {...form.getInputProps('phone')}
      />
      <Input
        label="Пошта"
        placeholder="Введіть вашу пошту"
        {...form.getInputProps('email')}
      />

      <Button color="yellow">Надіслати</Button>

      <Text className={styles.form_bottom_deactivate}>
        *Якщо ви хочете відключити щомісячний платіж, зв'яжіться з нами
        moravski@gmail.com
      </Text>
    </form>
  )
}

export default Form
