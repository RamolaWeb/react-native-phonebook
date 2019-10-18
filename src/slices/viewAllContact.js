import {
  createSlice,
} from 'redux-starter-kit'

import {
  getAllContact,
} from '../repository'

const viewAllContactSlice = createSlice({
  name: 'viewAllContact',
  initialState: {
    contacts: [],
  },
  reducers: {
    viewAllContact: (state, action) => {
      const contacts = getAllContact()
      state.contacts = contacts
    }
  }
})

const {
  actions,
  reducer,
} = viewAllContactSlice

export const {
  viewAllContact,
} = actions

export default reducer