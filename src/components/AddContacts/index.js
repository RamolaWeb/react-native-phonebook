import React, {
  Component,
} from 'react'
import {
  View,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

export default class AddContacts extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    onAddContact: PropTypes.func.isRequired,
  }

  render() {
    const {
      container,
    } = styles
    return (
      <View
        style={container}
      >
          <Text>
            Add Contacts
          </Text>
      </View>
    )
  }
}