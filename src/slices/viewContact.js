import {
  createSlice,
} from 'redux-starter-kit'

import {
  getContact,
} from '../repository'

const viewContactSlice = createSlice({
  name: 'viewContact',
  initialState: {
    contact: {},
  },
  reducers: {
    viewContactDetail: (state, action) => {
      const {
        payload,
      } = action
      getContact(payload)
    }
  },
})

const {
  actions,
  reducer,
} = viewContactSlice

export const {
  viewContactDetail,
} = actions

export default reducer