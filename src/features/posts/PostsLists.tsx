import { Link } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'

export default function PostsList() {
  const posts = useAppSelector(({ posts }) => posts)

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map(({ id, title, content }) => (
        <article className="post-excerpt" key={id}>
          <h3>
            <Link to={`/posts/${id}`}>{title}</Link>
          </h3>
          <p className="post-content">{content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  )
}
