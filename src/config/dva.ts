import { create } from 'dva-core-ts'
import modules from '@/models/models'
import createLoading from 'dva-loading-ts';

const app = create({
  onError: function (e) {
    console.log('e', e);
  },
});

modules.forEach(model => {
  app.model(model);
})

app.use(createLoading())

app.start()

export default app._store

