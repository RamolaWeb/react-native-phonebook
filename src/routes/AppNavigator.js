import React from 'react'
import {
  createAppContainer,
} from 'react-navigation'
import {
  createStackNavigator,
} from 'react-navigation-stack'
import {
  AddContacts,
} from '../containers'

const AppNavigator = createStackNavigator({
  AddContacts : {
    screen: AddContacts,
    navigationOptions: {
      title: 'Add To Contact'
    },
  },
}, {
  initialRouteName: 'AddContacts'
})

export default createAppContainer(AppNavigator)