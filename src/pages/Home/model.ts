import axios from 'axios';
import { Animated } from 'react-native';
import { Effect, Model } from 'dva-core-ts';
import { Reducer } from 'redux';
import { getMessage } from './service'

const delay = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
interface HomeState {
  num: number[];
}
interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    save: Reducer<HomeState>;
  },
  effects: {
    fetch: Effect;
  },
}

const Home: HomeModel = {
  namespace: 'home',
  state: {
    num: []
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
  },
  effects: {
    *fetch({ payload }, { call, put, select }) {
      try {
        let { num } = yield select((state: any) => state.home);
        let data = yield call(getMessage, {})
        yield put({
          type: 'save',
          payload: {
            num: data
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
}
export default Home;
