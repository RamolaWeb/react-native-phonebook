import React, {
  Component,
} from 'react'
import {
  connect,
} from 'react-redux'
import PropTypes from 'prop-types'

import {
  screen,
} from '../../constants'

import {
  ViewAllContacts,
} from '../../components'
import {
  viewAllContact,
} from '../../slices'

import {
  makeCall,
  shareContact,
} from '../../utils'

class ViewAllContactsHolder extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    getAllContacts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      getAllContacts,
    } = this.props
    getAllContacts()
  }

  onContactClickListener = item => {
    const {
      navigation,
    } = this.props
    const payload = {
      contact: item,
    }
    navigation.navigate(screen.VIEW_CONTACTS, {
      payload
    })
  }
  
  onMessageClickListerer = item => {
    const {
      phone,
    } = item
    const payload = {
      phoneNo: phone,
    }
    shareContact(payload)
  }

  onCallClickListener = item => {
    const {
      phone,
    } = item
    const args = {
      phoneNo: phone,
      makePrompt: false,
    }
    makeCall(args)
  }

  onAddContactClickListener = () => {
    const {
      navigation,
    } = this.props
    navigation.navigate(screen.ADD_CONTACTS)
  }

  render() {
    const {
      contacts,
    } = this.props
    console.log('data is', contacts)
    return (
      <ViewAllContacts
        contacts={contacts}
        onAddClick={this.onAddContactClickListener}
        onContactClick={this.onContactClickListener}
        onMessageClick={this.onMessageClickListerer}
        onCallClick={this.onCallClickListener}
      />
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.getAllContact.contacts
})

export default connect(mapStateToProps, {
  getAllContacts: viewAllContact,
})(ViewAllContactsHolder)

