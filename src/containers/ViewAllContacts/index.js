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

  onContactClickListener = item => {}
  
  onMessageClickListerer = item => {}

  onCallClickListener = item => {}

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

