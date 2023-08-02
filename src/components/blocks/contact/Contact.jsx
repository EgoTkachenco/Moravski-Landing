'use client'
import styles from './contact.module.scss'
import { Block } from '@/common/block/Block'
import { Text, Input, Button, Checkbox } from '@/common'
import { useForm } from '@mantine/form'
import Link from "next/link"

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
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
    },
  })
  const onSubmit = form.onSubmit((values) => {
    console.log(values)
  })
  return (
    <Block>
      <div className={styles.contact_card}>
        <div className={styles.contact_card_top}>
          <Text type="h3">Звʼяжіться з нами</Text>
          <Text type="h5">Ми відповімо на усі ваші питання</Text>
        </div>

        <form onSubmit={onSubmit} className={styles.contact_card_form}>
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
          <Input
            label="Повідомлення"
            placeholder="Введіть ваше повідомлення"
            {...form.getInputProps('message')}
          />
          <Button color="yellow">Надіслати</Button>

          <Checkbox label={<>Натисніть тут, щоб підтвердити, що ви прочитали та погоджуєтеся з умовами, представленими в угоді про <Link href="/policy">Політику конфіденційності</Link>.</>} />
        </form>
      </div>
    </Block>
  )
}

export default Contact
