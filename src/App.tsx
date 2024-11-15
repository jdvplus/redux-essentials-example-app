import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import PostsList from '@/features/posts/PostsLists'
import AddPostForm from '@/features/posts/AddPostForm'
import SinglePostPage from './features/posts/SinglePostPage'

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
        </Routes>
      </div>
    </Router>
  )
}
