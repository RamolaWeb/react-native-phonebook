import React, {
  Component,
} from 'react'
import {
  connect,
} from 'react-redux'
import PropTypes from 'prop-types'
import {
  cloneDeep,
  findIndex,
  map,
} from 'loadsh'

import {
  AddContacts,
} from '../../components'

import {
  saveContact,
} from '../../slices'

import {
  fields,
} from './constant'

class AddContactsHolder extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    isContactSaved: PropTypes.bool.isRequired,
    isErrorInContactSaved: PropTypes.bool.isRequired,
    errorSavingContact: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      field: cloneDeep(fields)
    }
  }

  onTextChange = (key, value) => {
    const {
      field,
    } = this.state
    const index = findIndex(field, item => item.key === key)
    const tempFieldData = {
      ...field[index],
      value,
    }
    const tempField = [
      ...field.slice(0, index),
      tempFieldData,
      ...field.slice(index+1),
    ]
    this.setState({
      field: tempField
    })
  }

  onContactSaved = () => {
    const {
      field,
    } = this.state
    const {
      addContact,
    } = this.props
    let payload = {}
    field.forEach(item => {
      const {
        key,
        value,
      } = item
      payload = {
        ...payload,
        [key]: value
      }
    })
    addContact(payload)
  }

  render() {
    const {
      field,
    } = this.state
    return (
      <AddContacts
        config={field}
        onAddContact={this.onContactSaved}
        onValueChanged={this.onTextChange}
      />
    )
  }

}

const mapStateToProps = state => ({
  isContactSaved: state.addContact.isSavingContacts,
  isErrorInContactSaved: state.addContact.isErrorSavingContacts,
  errorSavingContact: state.addContact.errorSavingContacts,
})
export default connect(mapStateToProps, {
  addContact: saveContact,
})(AddContactsHolder)