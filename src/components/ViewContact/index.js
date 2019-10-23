import React, {
  Component,
} from 'react'
import {
  View,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Fab,
  Icon,
} from 'native-base'

import styles from './style'

export default class ViewContact extends Component {
  static propTypes = {
    contact: PropTypes.object,
    onEditClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    contact: {},
  }

  render() {
    const {
      container,
      keyContainer,
      valueText,
      labelText,
    } = styles
    const {
      contact,
      onEditClick,
    } = this.props
    const {
      name = "Sahil",
      company = "Far Eye",
      phone = "8894065231",
      birthday = new moment(),
    } = contact
    return (
      <View
        style={container}
      >
        <View
          style={keyContainer}
        >
          <Text
            style={labelText}
          >
            Name
          </Text>
          <Text
            style={valueText}
          >
            {name}
          </Text>
        </View>
        <View
          style={keyContainer}
        >
          <Text
            style={labelText}
          >
            Company
          </Text>
          <Text
            style={valueText}
          >
            {company}
          </Text>
        </View>
        <View
          style={keyContainer}
        >
          <Text
            style={labelText}
          >
            Phone
          </Text>
          <Text
            style={valueText}
          >
            {phone}
          </Text>
        </View>
        <View
          style={keyContainer}
        >
          <Text
            style={labelText}
          >
            Date of Birth
          </Text>
          <Text
            style={valueText}
          >
            {new moment(birthday, 'dddd, MMMM Do YYYY, h:mm:ss a').format('dddd, MMMM Do YYYY')}
          </Text>
        </View>
        <Fab
          onPress={onEditClick}
        >
          <Icon
            name="md-create"
          />
        </Fab>
      </View>
    )
  }
}