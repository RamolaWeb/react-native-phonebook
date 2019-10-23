import React, {
  Component,
} from 'react'
import {
  View,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  map,
} from 'loadsh'
import {
  Item,
  Form,
  Input,
  Fab,
  Icon,
} from 'native-base'
import DatePicker from 'react-native-datepicker'

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
    const {
      dobContainer,
    } = styles
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
            <View
              style={dobContainer}
            >
              <Text
                style={{
                  fontSize: 17,
                }}
              >
                Select Date of Birth
              </Text>
              <DatePicker
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 25,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    marginTop: 50,
                  },
                }}
                date={value}
                format="Do, MMMM YYYY"
                mode='date'
                onDateChange={date => onValueChanged(key, date)}
                placeHolderText={placeHolder}
            />
            </View>
          )
      }
    })

  }

  render() {
    const {
      container,
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
        <Fab
          onPress={onAddContact}
        >
          <Icon
            name="md-checkmark"
          />
        </Fab>
      </View>
    )
  }
}