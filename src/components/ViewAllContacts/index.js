import React, {
  Component,
} from 'react'
import {
  SectionList,
  View,
  Text,
  TouchableWithoutFeedback,
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
      phone,
    } = item
    const {
      onMessageClick,
      onCallClick,
      onContactClick,
    } = this.props
    return (
      <TouchableWithoutFeedback
        onPress={() => onContactClick(item)}
      >
        <View>
          <ContactsItem
            name={name}
            phone={phone}
            onCall={() => onCallClick(item)}
            onMessage={() => onMessageClick(item)}
          />
        </View>
      </TouchableWithoutFeedback>
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
        <SectionList
          sections={contacts}
          renderItem={this.renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text>{title}</Text>
          )}
        />
        <Fab
          onPress={onAddClick}
        >
          <Icon
            name="md-add"
          />
        </Fab>
      </View>
    )
  }
}