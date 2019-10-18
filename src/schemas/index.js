import Realm from 'realm'
import contact from './contact'

const realm = new Realm({schema: [contact]})

export default realm