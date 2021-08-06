import {
  IMAGE_ENDPOINT,
  TAGS_ENDPOINT,
} from 'constants/apiUrls'

import {
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
} from 'reducers/imageReducer'

import client from './client'

export const getImage = () => {
  return async (dispatch) => {
    try {
      dispatch(getImageRequest())
      const response = await client.get(IMAGE_ENDPOINT)
      dispatch(getImageSuccess(response.data))
    } catch (err) {
      dispatch(getImageFailure, err.message)
    }
  }
}

export const getTags = () => {
  return async (dispatch) => {
    try {
      dispatch(getTagsRequest())
      const response = await client.get(TAGS_ENDPOINT)
      dispatch(getTagsSuccess(response.data))
    } catch (err) {
      dispatch(getTagsFailure, err.message)
    }
  }
}

//async function
export const addTag = (imageId, tagId) => {
  return (dispatch) => {
    try {
      dispatch(addTagRequest())
      client.patch(
        `${IMAGE_ENDPOINT}/${imageId}/${TAGS_ENDPOINT}/${tagId}`
      )
      dispatch(addTagSuccess(tagId))
    } catch (err) {
      dispatch(addTagFailure, err.message)
    }
  }
}

//async function
export const removeTag = (imageId, tagId) => {
  return (dispatch) => {
    try {
      dispatch(removeTagRequest())
      client.get(`${IMAGE_ENDPOINT}/${imageId}${TAGS_ENDPOINT}/${tagId}`)
      dispatch(removeTagSuccess(tagId))
    } catch (err) {
      dispatch(removeTagFailure, err.message)
    }
  }
}
