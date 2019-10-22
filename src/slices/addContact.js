import {
  createSlice,
} from 'redux-starter-kit'

import {
  saveContact as addContact,
  updateContact,
} from '../repository'

import {
  viewAllContact,
} from './viewAllContact'

const addContactsSlice = createSlice({
  name: 'addContacts',
  initialState: {
    isSavingContacts: false,
    isErrorSavingContacts: false,
    errorSavingContacts: 'Some Error',
  },
  reducers: {
    saveContact: (state, action) => {
      const {
        payload,
      } = action
      addContact(payload)
      viewAllContact()
      state.isSavingContacts = true
      state.isErrorSavingContacts = false
      state.errorSavingContacts = ''
    },
    updateContactDetails: (state, action) => {
      const {
        payload,
      } = action
      updateContact(payload)
    }
  }
})

const {
  actions,
  reducer,
} = addContactsSlice

export const {
  saveContact,
  updateContactDetails,
} = actions

export default reducer