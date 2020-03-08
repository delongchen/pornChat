export const mesStore = {
  namespaced: true,
  state: {
    mes_list: [
      {
        title: '毛',
        content: 'I have no JJ'
      },
      {
        title: '毛',
        content: 'I have no JJ'
      },
      {
        title: '毛',
        content: 'I have no JJ'
      },
      {
        title: '毛',
        content: 'I have no JJ'
      },
    ]
  },
  getters: {
    getMesList(state) {
      return state.mes_list;
    }
  }
};
