<template>
  <div class="menus-container mt-2">
    <div
      v-for="(menu, i) in menus"
      :key="`menu-${i}`"
      class="relative"
    >
      <SidebarMenu
        :menu="menu"
        @toggleMenuExpand="toggleMenuExpand(i)"
      />
      <SidebarAction
        v-if="menu.actions"
        :actions="menu.actions"
        @channelSettings="openChannelSettings"
        @channelManagement="openChannelManagement"
      />
      <SidebarSubmenu
        v-if="menu.expand"
        :submenus="menu.children"
      />
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/Sidebar/SidebarMenu";
import SidebarSubmenu from "@/components/Sidebar/SidebarSubmenu";
import SidebarAction from "@/components/Sidebar/SidebarAction";
export default {
  name: 'SidebarMenuWrapper',
  components: {SidebarAction, SidebarSubmenu, SidebarMenu},
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
