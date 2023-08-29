'use client'
import { useState, useEffect } from 'react'

export const useIsTop = (allow) => {
  const [isTop, setIsTop] = useState(!!allow)

  useEffect(() => {
    if (!allow || typeof window === 'undefined') return

    const onscroll = () => setIsTop(window.scrollY === 0)
    document.addEventListener('scroll', onscroll)
    onscroll()
    return () => {
      document.removeEventListener('scroll', onscroll)
    }
  }, [allow])

  return isTop
}

export const useIntervalCount = (count, time = 3000) => {
  const intervalTime = 75
  const [value, setValue] = useState(0)
  useEffect(() => {
    const step = count / (time / intervalTime)
    const interval = setInterval(() => {
      setValue((value) =>
        value < count
          ? Math.ceil(value + step)
          : clearInterval(interval) || count
      )
    }, intervalTime)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return value
}
