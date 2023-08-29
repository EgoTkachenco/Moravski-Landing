'use client'
import styles from './button.module.scss'

const Button = ({ children, color = 'dark', onClick = () => {}, ...props }) => {
  const btnClasses = `${styles.btn} ${color ? styles['btn-' + color] : ''}`
  return (
    <button className={btnClasses} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
