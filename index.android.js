import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './components/HomeContainer'

class CustomAlert extends Component {
   render() {
      return (
         <HomeContainer />
      )
   }
}

AppRegistry.registerComponent('CustomAlert', () => CustomAlert)
