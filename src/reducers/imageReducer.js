import { createSlice } from '@reduxjs/toolkit'

//initial state for testing purposes
const initialState = {
  image: {
    id: 1,
    imageUrl:
      'https://developer-chrome-com.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/DU7j6Ed17BVr0k2f7EBy.png',
    title: 'image_title',
    tags: [
      { id: 5, label: 'Realism' },
      { id: 1, label: 'Abstract' },
      { id: 6, label: 'Self-Portrait' },
    ],
  },
  tags: [
    { id: 1, label: 'Abstract' },
    { id: 2, label: 'Typography' },
    { id: 3, label: 'Graffiti' },
    { id: 5, label: 'Realism' },
    { id: 6, label: 'Self-Portrait' },
  ],
  errorGettingImage: '',
  isGettingImage: false,
  errorGettingTags: '',
  isGettingTags: false,
  errorAddingTag: '',
  isAddingTag: false,
  errorRemovingTag: '',
  isRemovingTag: false,
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    getImageRequest: (state) => {
      state.errorGettingImage = ''
      state.isGettingImage = true
    },
    getImageSuccess: (state, action) => {
      const image = action.payload
      state.isGettingImage = false
      state.image = image
    },
    getImageFailure: (state, action) => {
      state.errorGettingImage = action.message
      state.isGettingImage = false
    },
    getTagsRequest: (state) => {
      state.errorGettingTags = ''
      state.isGettingTags = true
    },
    getTagsSuccess: (state, action) => {
      const tags = action.payload
      state.isGettingTags = false
      state.tags = tags
    },
    getTagsFailure: (state, action) => {
      state.errorGettingTags = action.message
      state.isGettingTags = false
    },
    addTagRequest: (state) => {
      state.errorAddingTag = ''
      state.isAddingTag = true
    },
    addTagSuccess: (state, action) => {
      if (!state.image.tags.find((tag) => tag.id == action.payload)) {
        const newTag = state.tags.find((tag) => tag.id == action.payload)
        state.isAddingTag = false
        state.image.tags.push(newTag)
      }
    },
    addTagFailure: (state, action) => {
      state.errorAddingTag = action.message
      state.isAddingTag = false
    },
    removeTagRequest: (state) => {
      state.errorRemovingTag = ''
      state.isRemovingTag = true
    },
    removeTagSuccess: (state, action) => {
      state.isRemovingTag = false
      const filteredTags = state.image.tags.filter(
        (tag) => tag.id !== action.payload
      )
      state.image.tags = filteredTags
    },
    removeTagFailure: (state, action) => {
      state.errorRemovingTag = action.message
      state.isRemovingTag = false
    },
  },
})

export const {
  getImageRequest,
  getImageSuccess,
  getImageFailure,
  getTagsRequest,
  getTagsSuccess,
  getTagsFailure,
  addTagRequest,
  addTagSuccess,
  addTagFailure,
  removeTagRequest,
  removeTagSuccess,
  removeTagFailure,
} = imageSlice.actions

export default imageSlice.reducer
