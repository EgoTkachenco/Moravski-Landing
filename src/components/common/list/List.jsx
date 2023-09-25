'use client'
import { useState, useEffect } from 'react'
import styles from './list.module.scss'
import Pagination from '../pagination/Pagination'
import { useLang } from '@/locales'

const List = ({
  data: initialData,
  service,
  itemsPerRow = 3,
  renderItem = (item, i) => <div>{i}</div>,
}) => {
  const { lang } = useLang()
  const [state, setState] = useState(null)
  const n = itemsPerRow

  useEffect(() => {
    if (service) getData()
  }, [service])

  useEffect(() => {
    if (initialData)
      setState({
        page: 1,
        data: initialData,
        total: 1,
      })
  }, [initialData])

  const onPageChange = () => {}

  const getData = (page) => {
    service(page, lang === 'en').then((data) => {
      setState({
        page: data.current_page,
        data: data.data,
        total: data.last_page,
      })
    })
  }

  if (state === null) return 'loading'

  const { data, page, total } = state

  return (
    <>
      <div className={styles.list}>
        {data.map((item, i) => (
          <div
            className={styles.list_item}
            style={{ width: `calc((100% - (40px * ${n - 1})) / ${n})` }}
            key={i}
            data-aos="fade-up"
            data-aos-delay={100 * ((i % n) + 1)}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination page={page} total={total} onChange={onPageChange} />
      </div>
    </>
  )
}

export default List
