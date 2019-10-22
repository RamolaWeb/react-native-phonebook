import React from 'react'
import {
  createAppContainer,
} from 'react-navigation'
import {
  createStackNavigator,
} from 'react-navigation-stack'
import {
  AddContacts,
  ViewAllContacts,
  ViewContact,
} from '../containers'

const AppNavigator = createStackNavigator({
  AddContacts : {
    screen: AddContacts,
    navigationOptions: {
      title: 'Add To Contact'
    },
  },
  ViewAllContacts: {
    screen: ViewAllContacts,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  ViewContact: {
    screen: ViewContact,
    navigationOptions: {
      title: 'Contacts',
    },
  }
}, {
  initialRouteName: 'ViewAllContacts'
})

export default createAppContainer(AppNavigator)