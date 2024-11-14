import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '@/features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

type AppStore = typeof store
type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export type { AppStore, AppDispatch, RootState }
