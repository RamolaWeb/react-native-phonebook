import {
  createSlice,
} from 'redux-starter-kit'

import {
  saveContact as addContact,
  updateContact,
} from '../repository'

const addContactsSlice = createSlice({
  name: 'addContacts',
  initialState: {
    isSavingContacts: false,
    isErrorSavingContacts: false,
    errorSavingContacts: 'Some Error',
    isUpdatingContact: false,
  },
  reducers: {
    saveContact: (state, action) => {
      const {
        payload,
      } = action
      addContact(payload)
      state.isSavingContacts = true
      state.isErrorSavingContacts = false
      state.errorSavingContacts = ''
    },
    updateContactDetails: (state, action) => {
      const {
        payload,
      } = action
      updateContact(payload)
      state.isUpdatingContact = true
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