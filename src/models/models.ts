import home from '@/pages/Home/model'
import { DvaLoadingState } from "dva-loading-ts"
const models = [home]

export type RootState = {
  home: typeof home.state;
  loading: DvaLoadingState;
}

export default models