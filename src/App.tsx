import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'
import PostsList from '@/features/posts/PostsLists'

function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PostsList />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
