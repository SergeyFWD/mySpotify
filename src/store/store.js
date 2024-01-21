import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../store/reducers/auth'

export default configureStore({
  reducer: {
    auth: apiReducer,
  },
})
