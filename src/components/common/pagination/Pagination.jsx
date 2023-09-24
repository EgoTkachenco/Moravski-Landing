'use client'
import { Pagination as PaginationCore } from '@mantine/core'

const Pagination = ({ total = 1, page, onChange = () => {} }) => {
  return (
    <PaginationCore
      value={page}
      onChange={onChange}
      total={total}
      siblings={1}
      boundaries={1}
    />
  )
}

export default Pagination
