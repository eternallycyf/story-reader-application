import { View } from 'react-native';
import * as React from 'react';
import Navigator from '@/navigator/index'
import { Provider } from "react-redux";
import store from '@/config/dva'
import '@/config/http'
import { Provider as AntdProvider } from '@ant-design/react-native';

const App = () => {
  return (
    <Provider store={store}>
      <AntdProvider>
        <Navigator />
      </AntdProvider>
    </Provider>
  );
};

export default App;
