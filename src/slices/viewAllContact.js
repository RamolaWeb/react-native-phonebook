import {
  createSlice,
} from 'redux-starter-kit'

import {
  getAllContact,
} from '../repository'

import {
  map,
} from 'loadsh'

const viewAllContactSlice = createSlice({
  name: 'viewAllContact',
  initialState: {
    contacts: [],
  },
  reducers: {
    viewAllContact: (state, action) => {
      const contacts = map(getAllContact(), item => item)
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