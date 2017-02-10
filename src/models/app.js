import * as appService from '../services/app';

export default {

  namespace: 'app',

  state: {
    carousel: [],
    list: ['001', '002', '003', '004'],
    itemsById: [
      {
        id: '001',
        text: 'hahahha'
      },
      {
        id: '002',
        text: 'hehehehe'
      },
      {
        id: '003',
        text: 'yooyyoyoy'
      },
      {
        id: '004',
        text: 'alskdfhlkh'
      }
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        if (pathname = '/') {
          dispatch({ type: 'fetchList' });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *fetchList({payload}, { call, put }) {  // eslint-disable-line
      const {data} = yield call(appService.fetch, '/api/');
      const {itemsById,carousel}=data;
      yield put({
        type: 'save',
        payload: {
          itemsById,
          carousel
        }
      })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
