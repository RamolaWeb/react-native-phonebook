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
  map,
} from 'loadsh'
import {
  Item,
  Form,
  Input,
  DatePicker,
} from 'native-base'

import {
  fieldType,
} from '../../constants'
import styles from './style'

export default class AddContacts extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    onAddContact: PropTypes.func.isRequired,
    onValueChanged: PropTypes.func.isRequired,
  }

  renderForm = () => {
    const {
      config,
      onValueChanged,
    } = this.props
    const {
      TEXT,
      DATE_OF_BIRTH,
      PHONE_NUMBER,
    } = fieldType
    return map(config, item => {
      const {
        key,
        type,
        placeHolder,
        value,
      } = item
      switch(type) {
        case TEXT:
        case PHONE_NUMBER:
          return (
            <Item floatingLabel>
              <Input
                onChangeText={text => onValueChanged(key, text)}
                placeholder={placeHolder}
                value={value}
              />
            </Item>
          )
        case DATE_OF_BIRTH:
          return (
            <DatePicker
              defaultDate={new Date()}
              disabled={false}
              onDateChange={date => onValueChanged(key, date)}
              placeHolderText={placeHolder}
            />
          )
      }
    })

  }

  render() {
    const {
      container,
      footer,
      footerText,
    } = styles
    const {
      onAddContact,
    } = this.props
    return (
      <View
        style={container}
      >
        <Form>
          {this.renderForm()}
        </Form>
        <TouchableWithoutFeedback
          onPress={onAddContact}
        >
          <View
            style={footer}
          >
            <Text
              style={footerText}
            >
              Add To Contacts
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}