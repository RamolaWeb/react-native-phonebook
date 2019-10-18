import React, {
  Component,
} from 'react'
import {
  FlatList,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Fab,
  Icon,
} from 'native-base'

import ContactsItem from '../ContactItem'
import styles from './style'

export default class ViewAllContact extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onAddClick: PropTypes.func.isRequired,
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
      onAddClick,
    } = this.props
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={contacts}
          renderItem={this.renderItem}
        />
        <Fab
          onPress={onAddClick}
        >
          <Icon
            name="share"
          />
        </Fab>
      </View>
    )
  }
}