<template>
  <div class="absolute top-0 w-full h-screen">
    <div
      class="w-full h-full bg-gray-800 opacity-70 animate-backdrop"
      @click="toggleSidebar"
    />
    <div class="fixed top-0 bg-white h-full w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12 animate-slide">
      <SidebarToggle class="right-2" />

      <SidebarLogo />

      <SidebarMenuWrapper
        :menus="menus"
        @toggleMenuExpand="toggleMenuExpand"
      />
    </div>
  </div>
</template>

<script>
import SidebarLogo from "@/components/Sidebar/SidebarLogo";
import SidebarToggle from "@/components/Sidebar/SidebarToggle";
import SidebarMenuWrapper from "@/components/Sidebar/SidebarMenuWrapper";
export default {
  name: 'SidebarContainer',
  components: {SidebarMenuWrapper, SidebarToggle, SidebarLogo},
  data() {
    return {
      menus: [
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
      ]
    }
  },
  methods: {
    toggleMenuExpand(id) {
      this.menus[id].expand = !this.menus[id].expand;
    },
    async toggleSidebar() {
      await this.$store.dispatch('sidebarExpandToggle');
    },
    openChannelSettings() {
      console.log('open channel settings clicked');
    },
    openChannelManagement() {
      console.log('open channel management clicked');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
