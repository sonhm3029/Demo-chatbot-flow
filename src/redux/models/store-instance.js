const storeInstance = ({
  storeName,
  fetchProvider,
  initStore = { listData: [] },
  customEffect = () => ({}),
}) => ({
  state: {
    listData: [],
    totalElements: 0,
    params: { page: 0, size: 10, tradingStatus: 30 },
    ...initStore,
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
    updateNestedData(state, payload = {}) {
      let keys = Object.keys(payload);
      let map = keys?.reduce((obj, key) => {
        obj[key] = {
          ...state[key],
          ...payload[key],
        };
        return obj;
      }, {});
      return {
        ...state,
        ...map,
      };
    },
    resetData(state) {
      return { ...initStore };
    },
  },
  effects: (dispatch) => ({
    dummy: (payload, state) => {},
    ...customEffect({ dispatch }),
  }),
});

export default storeInstance;
