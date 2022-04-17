import React, { useEffect, useRef, useState } from 'react'
import { View, Text } from "react-native"
import LottieView from 'lottie-react-native';
const Detail = () => {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <LottieView source={require('./animation.json')} autoPlay loop />
      </View>
    </>
  )
}
export default Detail