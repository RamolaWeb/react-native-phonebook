import React from 'react'
import {
  createAppContainer,
} from 'react-navigation'
import {
  createStackNavigator,
} from 'react-navigation-stack'
import AddContacts from '../containers'

const AppNavigator = createStackNavigator({
  AddContacts,
}, {
  initialRouteName: 'AddContacts'
})

export default createAppContainer(AppNavigator)