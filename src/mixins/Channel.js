const ChannelMixin = {
  methods: {
    getChannelIcon(channelType) {
      switch (channelType) {
        case 'whatsapp':
          return ['fab', 'whatsapp'];
        case 'email':
          return 'envelope';
        case 'phone':
          return 'phone';
        default:
          return '';
      }
    },
    searchChannelList(channelList = [], keyword = '') {
      return channelList.filter(channel => this.isSimilarChannel(channel, keyword));
    },
    filterChannelList(channelList = [], keyword = '') {
      return channelList.filter(channel => this.isExactChannel(channel, keyword));
    },
    findChannelIndex(channelList = [], keyword = '') {
      return channelList.findIndex(channel => this.isExactChannel(channel, keyword));
    },
    isExactChannel(channel, keyword) {
      return (channel.name.toLowerCase() === keyword.toLowerCase());
    },
    isSimilarChannel(channel, keyword) {
      return (channel.name.toLowerCase().includes(keyword.toLowerCase()));
    },
    resetChannelKeyword() {
      this.$store.dispatch('channelKeywordUpdate', '');
    },
    getFilteredChannel(list, keyword) {
      return (keyword) ? this.searchChannelList(list, keyword) : [...list];
    },
  },
};

export default ChannelMixin;
