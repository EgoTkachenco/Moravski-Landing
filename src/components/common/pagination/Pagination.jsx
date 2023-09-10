'use client'
import { Pagination as PaginationCore } from '@mantine/core'

const Pagination = ({ total = 1, page, onChange = () => {} }) => {
  return <PaginationCore value={page} onChange={onChange} total={total} />
}

export default Pagination
