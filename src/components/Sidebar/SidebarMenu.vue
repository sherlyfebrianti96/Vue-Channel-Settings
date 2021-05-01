<template>
  <div class="absolute top-0 w-full h-screen">
    <div class="w-full h-full bg-gray-800 opacity-70">
    </div>
    <div class="fixed top-0 left-0 bg-white h-full w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12">
      SidebarMenu
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    msg: String
  },
  data() {
    return {
      menu: [
        {
          name: 'Inbox',
          children: [
            {
              name: 'New',
              icon: '<i class="fas fa-inbox"></i>',
              badge: 17
            },
            {
              name: 'Assigned',
              icon: '<i class="fas fa-user-friends"></i>',
              badge: 17
            },
            {
              name: 'Closed',
              icon: '<i class="fas fa-check"></i>',
              badge: null
            },
            {
              name: 'Spam',
              icon: '<i class="fas fa-exclamation-circle"></i>',
              badge: null
            }
          ]
        },
        {
          name: 'Personal',
          children: []
        },
        {
          name: 'Teams',
          children: []
        },
        {
          name: 'Channels',
          children: [
            {
              name: 'New',
              icon: '<i class="fas fa-inbox"></i>',
              badge: 17
            },
            {
              name: 'Assigned',
              icon: '<i class="fas fa-user-friends"></i>',
              badge: 17
            },
            {
              name: 'Closed',
              icon: '<i class="fas fa-check"></i>',
              badge: null
            },
            {
              name: 'Spam',
              icon: '<i class="fas fa-exclamation-circle"></i>',
              badge: null
            }
          ]
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
