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
  updateContactDetails,
  viewAllContact,
} from '../../slices'

import {
  fields,
} from './constant'

import {
  validateField,
} from '../../utils'

class AddContactsHolder extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    isContactSaved: PropTypes.bool.isRequired,
    isContactUpdated: PropTypes.bool.isRequired,
    isErrorInContactSaved: PropTypes.bool.isRequired,
    errorSavingContact: PropTypes.string.isRequired,
    updateContact: PropTypes.func.isRequired,
    updateContactList: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      field: this.preFillData()
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      isContactSaved,
      updateContactList,
      navigation,
      isContactUpdated,
    } = this.props
    if ((nextProps.isContactSaved && isContactSaved !== nextProps.isContactSaved)
    || (nextProps.isContactUpdated && isContactUpdated !== nextProps.isContactUpdated)) {
      updateContactList()
      navigation.popToTop()
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
    if (validateField(field)) {
      const {
        addContact,
        updateContact,
        navigation,
      } = this.props
      const metaData = navigation.getParam('payload', {})
      const {
        mode,
      } = metaData
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
      if (mode === 'edit') {
        updateContact(payload)
      }
      else {
        addContact(payload)
      }
    }
  }

  preFillData = () => {
    const {
      navigation,
    } = this.props
    const payload = navigation.getParam('payload', {})
    const {
      mode,
      contact,
    } = payload
    if (mode === 'edit') {
      return map(fields, item => {
        const {
          key,
        } = item
        return {
          ...item,
          value: contact[[key]]
        }
      })
    }
    return cloneDeep(fields)
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
  isContactUpdated: state.addContact.isUpdatingContact,
  isErrorInContactSaved: state.addContact.isErrorSavingContacts,
  errorSavingContact: state.addContact.errorSavingContacts,
})
export default connect(mapStateToProps, {
  addContact: saveContact,
  updateContact: updateContactDetails,
  updateContactList: viewAllContact,
})(AddContactsHolder)