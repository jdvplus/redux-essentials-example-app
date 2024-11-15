import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'
import PostsList from '@/features/posts/PostsLists'
import AddPostForm from '@/features/posts/AddPostForm'

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
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}
