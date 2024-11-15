import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Post {
  id: string
  title: string
  content: string
}

const initialState: Post[] = [
  { id: '1', title: 'first post', content: 'hello' },
  { id: '2', title: 'second post', content: 'goodbye' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, { payload }: PayloadAction<Post>) => {
      state.push(payload)
    },
  },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
