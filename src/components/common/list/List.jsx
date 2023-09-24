'use client'
import styles from './list.module.scss'
import Pagination from '../pagination/Pagination'

const List = ({
  data = [],
  page,
  total,
  itemsPerRow = 3,
  onPageChange = () => {},
  renderItem = (item, i) => <div>{i}</div>,
}) => {
  const n = itemsPerRow
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
