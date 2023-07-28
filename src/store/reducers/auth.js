import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  reducers: {
    getAuth() {},
  },
})

export const { getAuth } = apiSlice.actions
export default createSlice.reducer
