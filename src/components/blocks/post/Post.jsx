import styles from './post.module.scss'
import { Text } from '@/common'
import MoreNews from '@/components/blocks/news/MoreNews'

const Post = ({ image, title, subtitle, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <img className={styles.illustration} src={image} alt={title} />
        <Text type="h3" className={styles.title}>
          {title}
        </Text>
        {subtitle && <Text className={styles.subtitle}>{subtitle}</Text>}

        {content && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>

      <MoreNews />
    </div>
  )
}

export default Post
