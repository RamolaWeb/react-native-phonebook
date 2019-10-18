import realm from '../schemas'

export const saveContact = data => (
  realm.write(() => {
    realm.create('Contact', data)
  })
)

export const getAllContact = () => (
  realm.objects('Contact')
)