import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductWrapper from './components/ProductWrapper'
import UserList from './components/UserList'



const App = () => {

  const Stack=createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper}/>
        <Stack.Screen name='User' component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App