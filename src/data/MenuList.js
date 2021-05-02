export const DATA_MENU_LIST = [
  {
    name: 'Inbox',
    expand: true,
    children: [
      {
        name: 'New',
        icon: 'inbox',
        badge: 17
      },
      {
        name: 'Assigned',
        icon: 'user-friends',
        badge: 110
      },
      {
        name: 'Closed',
        icon: 'check',
        badge: null
      },
      {
        name: 'Spam',
        icon: 'exclamation-circle',
        badge: null
      }
    ]
  },
  {
    name: 'Personal',
    expand: false,
    children: []
  },
  {
    name: 'Teams',
    expand: false,
    children: []
  },
  {
    name: 'Channels',
    expand: true,
    children: [],
    actions: [
      {
        name: 'Settings',
        icon: 'ellipsis-h',
        emitter: 'channelSettings'
      },
      {
        name: 'New Channel',
        icon: 'plus',
        emitter: 'channelManagement'
      }
    ],
  },
];