import {
  createSlice,
} from 'redux-starter-kit'

import {
  getAllContact,
} from '../repository'

import {
  map,
  findIndex,
  filter,
  isUndefined,
} from 'loadsh'

const viewAllContactSlice = createSlice({
  name: 'viewAllContact',
  initialState: {
    contacts: [],
  },
  viewAllContact,
  reducers: {
    viewAllContact: (state, action) => {
      const contacts = map(getAllContact(), item => ({...item}))
      let data = []
      for (let i=0; i<contacts.length; i++) {
        const title = contacts[i].name.substring(0,1)
        const checkIndex = findIndex(data, o => o.title === title)
        if (checkIndex === -1) {
          const contactsData = filter(contacts, o => {
            const {
              name,
            } = o
            return name.substring(0,1) === title
          })
          data = [
            ...data,
            {
              title,
              data: contactsData
            }
          ]
        }
      }
      state.contacts = data
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