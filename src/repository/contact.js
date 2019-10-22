import realm from '../schemas'

export const saveContact = data => (
  realm.write(() => {
    realm.create('Contact', data)
  })
)

export const getAllContact = () => (
  realm.objects('Contact')
)

export const getContact = ({ name }) => (
  realm.objects('Contact').filtered(`name = ${name}`)
)

export const updateContact = (contact) => {
  const {
    name,
  } = contact
  realm.write(() => {
    const obj = realm.objects('Contact').filtered(`name = "${name}"`)
    realm.delete(obj)
    realm.create('Contact', contact)
  })
}