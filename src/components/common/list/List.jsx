'use client'
import styles from './list.module.scss'
import Text from '../text/Text'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import Pagination from '../pagination/Pagination'

const List = ({
  breadcrumbs,
  title,
  data,
  page,
  total,
  onPageChange = () => {},
  renderItem = (item, i) => <div>{i}</div>,
}) => {
  return (
    <>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {title && (
        <Text type="h3" className={styles.title} data-aos="fade-up">
          {title}
        </Text>
      )}

      <div className={styles.list}>
        {data.map((item, i) => (
          <div className={styles.list_item} key={i}>
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
