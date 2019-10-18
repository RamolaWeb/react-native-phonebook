import React, {
  Component,
} from 'react'
import {
  FlatList,
} from 'react-native'
import PropTypes from 'prop-types'

import ContactsItem from '../ContactItem'
import styles from './style'

export default class ViewAllContact extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onContactClick: PropTypes.func.isRequired,
    onMessageClick: PropTypes.func.isRequired,
    onCallClick: PropTypes.func.isRequired,
  }

  renderItem = ({item}) => {
    const {
      name,
    } = item
    const {
      onMessageClick,
      onCallClick,
    } = this.props
    return (
      <ContactsItem
        name={name}
        onCall={() => onCallClick(item)}
        onMessage={() => onMessageClick(item)}
      />
    )
  }

  render() {
    const {
      contacts,
    } = this.props
    return (
      <FlatList
        data={contacts}
        renderItem={this.renderItem}
      />
    )
  }
}