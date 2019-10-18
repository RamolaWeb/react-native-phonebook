import React, {
  Component,
} from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onCall: PropTypes.func.isRequired,
    onMessage: PropTypes.func.isRequired,
  }

  render() {
    const {
      name,
      onCall,
      onMessage,
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
              <Text
                style={callText}
              >
                Call
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={onMessage}
          >
            <View
              style={messageContainer}
            >
              <Text
                style={messageText}
              >
                Message
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}