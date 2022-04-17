import React, { useEffect, useRef, useState } from 'react'
import Home from '@/pages/Home'
import Detail from "@/pages/Detail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootSatackParamList = {
  Home: undefined,
  Detail: undefined
}

export type RootSatackNavigation = NativeStackNavigationProp<RootSatackParamList>
const Stack = createNativeStackNavigator<RootSatackParamList>();
const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            gestureEnabled: true,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '首页',
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: '详情页',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default Navigator