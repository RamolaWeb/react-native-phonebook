import {
  createSlice,
} from 'redux-starter-kit'

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
      console.log(payload)
      state.isSavingContacts = true
      state.isErrorSavingContacts = true
      state.errorSavingContacts = true
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