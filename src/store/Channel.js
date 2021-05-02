export const ChannelStore = {
  state: {
    channelList: localStorage.getItem('channelList'),
    channelKeyword: '',
  },
  getters: {
    channelList: state => JSON.parse(state.channelList) || [],
    channelKeyword: state => state.channelKeyword || ''
  },
  mutations: {
    channelListUpdate(state, channelList) {
      localStorage.setItem('channelList', channelList)
      state.channelList = channelList;
    },
    channelKeywordUpdate(state, keyword) {
      state.channelKeyword = keyword;
    }
  },
  actions: {
    channelListUpdate(context, channelList) {
      context.commit('channelListUpdate', JSON.stringify(channelList));
    },
    channelKeywordUpdate(context, keyword) {
      context.commit('channelKeywordUpdate', keyword);
    }
  },
}