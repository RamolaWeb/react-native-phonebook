import React, {
  Component,
} from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Icon,
} from 'native-base'

import styles from './styles'

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onCall: PropTypes.func.isRequired,
    onMessage: PropTypes.func.isRequired,
  }

  render() {
    const {
      name,
      onCall,
      onMessage,
      phone,
    } = this.props
    const {
      container,
      nameContainer,
      nameText,
      actionContainer,
      callContainer,
      messageContainer,
      callText,
      messageText,
      phoneText,
    } = styles
    return (
      <View
        style={container}
      >
        <View
          style={nameContainer}
        >
          <Text
            style={nameText}
          >
            {name}
          </Text>
          <Text
            style={phoneText}
          >
            {phone}
          </Text>
        </View>
        <View
          style={actionContainer}
        >
          <TouchableWithoutFeedback
            onPress={onCall}
          >
            <View
              style={callContainer}
            >
              <Icon
                name="md-call"
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={onMessage}
          >
            <View
              style={messageContainer}
            >
              <Icon
                name="md-share"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}