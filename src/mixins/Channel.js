const channelMixin = {
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
    }
  },
};

export default channelMixin;
