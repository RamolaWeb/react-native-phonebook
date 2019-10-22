import React, {
  Component,   
} from 'react'
import PropTypes from 'prop-types'

import {
  ViewContact,
} from '../../components'
import {
  screen,
} from '../../constants'

export default class ViewContactHolder extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  onEditClickListener = () => {
    const {
      navigation,
    } = this.props
    const contact = this.getContactDetail()
    const payload = {
      contact,
      mode: 'edit',
    }
    navigation.navigate(screen.ADD_CONTACTS, {
      payload
    })
  }

  getContactDetail = () => {
    const {
      navigation,
    } = this.props
    const payload = navigation.getParam('payload', {})
    const {
      contact = {},
    } = payload
    return contact
  }

  render() {
    const contact = this.getContactDetail()
    return (
      <ViewContact
        contact={contact}
        onEditClick={this.onEditClickListener}
      />
    )
  }
}