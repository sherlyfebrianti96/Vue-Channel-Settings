export const DATA_MENU_LIST = [
  {
    name: 'Inbox',
    expand: true,
    children: [
      {
        name: 'New',
        icon: 'fa-inbox',
        badge: 17
      },
      {
        name: 'Assigned',
        icon: 'fa-user-friends',
        badge: 110
      },
      {
        name: 'Closed',
        icon: 'fa-check',
        badge: null
      },
      {
        name: 'Spam',
        icon: 'fa-exclamation-circle',
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
    children: [
      {
        name: 'New',
        icon: 'fa-inbox'
      },
      {
        name: 'Assigned',
        icon: 'fa-user-friends'
      },
      {
        name: 'Closed',
        icon: 'fa-check'
      },
      {
        name: 'Spam',
        icon: 'fa-exclamation-circle'
      }
    ],
    actions: [
      {
        name: 'Settings',
        icon: 'fa-ellipsis-h',
        emitter: 'channelSettings'
      },
      {
        name: 'New Channel',
        icon: 'fa-plus',
        emitter: 'channelManagement'
      }
    ],
  },
];