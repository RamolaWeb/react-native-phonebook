import {
  createSlice,
} from 'redux-starter-kit'

import {
  saveContact as addContact,
} from '../repository'

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
      console.log('data is', payload)
      addContact(payload)
      state.isSavingContacts = true
      state.isErrorSavingContacts = false
      state.errorSavingContacts = ''
    }
  }
})

const {
  actions,
  reducer,
} = addContactsSlice

export const {
  saveContact,
} = actions

export default reducer