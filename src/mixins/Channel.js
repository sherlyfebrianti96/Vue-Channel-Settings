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
    filterChannelList(channelList = [], keyword = '') {
      return channelList.filter(channel => this.isExactChannel(channel, keyword));
    },
    findChannelIndex(channelList = [], keyword = '') {
      return channelList.findIndex(channel => this.isExactChannel(channel, keyword));
    },
    isExactChannel(channel, keyword) {
      return (channel.name.toLowerCase() === keyword.toLowerCase());
    }
  },
};

export default ChannelMixin;
