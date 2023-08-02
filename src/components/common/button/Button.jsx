'use client'
import styles from './button.module.scss'

const Button = ({ children, color = 'dark', onClick = () => {} }) => {
  const btnClasses = `${styles.btn} ${color ? styles['btn-' + color] : ''}`
  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
