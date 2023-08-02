'use client'
import { Checkbox as CoreCheckbox } from '@mantine/core'
import styles from './checkbox.module.scss'

const Checkbox = (props) => {
  return <CoreCheckbox {...props} className={styles.checkbox} />
}

export default Checkbox
