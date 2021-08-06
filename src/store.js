import { configureStore } from '@reduxjs/toolkit'

import imageState from 'reducers/imageReducer'

const reducer = {
  imageState,
}

const store = configureStore({
  reducer,
})

export default store
