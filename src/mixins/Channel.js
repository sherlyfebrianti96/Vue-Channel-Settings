const ChannelMixin = {
  methods: {
    getChannelIcon(channelType) {
      switch (channelType) {
        case 'whatsapp':
          return 'fab fa-whatsapp'
        case 'email':
          return 'far fa-envelope'
        case 'phone':
          return 'fas fa-phone'
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
    }
  },
};

export default ChannelMixin;
