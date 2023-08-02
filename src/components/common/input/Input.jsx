'use client'
import { TextInput } from '@mantine/core'
import styles from './input.module.scss'

const Input = (props) => {
  return <TextInput {...props} variant="unstyled" className={styles.input} />
}

export default Input
