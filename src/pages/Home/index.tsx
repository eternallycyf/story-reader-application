import { RootState } from "@/models/models"
import { RootSatackNavigation } from "@/navigator/index"
import React, { FC, useEffect, useRef, useState } from 'react'
import { View, Text, Button } from "react-native"
import { Icon } from '@ant-design/react-native';
import { connect, ConnectedProps } from "react-redux"

const mapStateToProps = ({ home, loading }: RootState) => ({
  num: home.num,
  loading,
  fetchLoading: loading.effects['home/fetch'] = false
})
const connector = connect(mapStateToProps)
interface Iprops extends ConnectedProps<typeof connector> {
  navigation: RootSatackNavigation;
}
const Home: FC<Iprops> = (props) => {
  const { dispatch, num, navigation } = props
  console.log(props)

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="跳转到详情页" onPress={() => navigation.navigate('Detail')} />
        <Button title="获取数据" onPress={() => dispatch({ type: 'home/fetch', payload: {} })} />
        <Icon name={'account-book'} />
      </View>
    </>
  )
}
export default connect(mapStateToProps)(Home);
