<template>
  <div class="absolute top-0 w-full h-screen">
    <div
      class="w-full h-full bg-gray-800 opacity-70 animate-backdrop"
      @click="toggleSidebar"
    />
    <div class="fixed top-0 bg-white h-full w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12 animate-slide">
      <SidebarToggle class="right-2" />

      <SidebarLogo />

      <div class="menus-container mt-2">
        <div
          v-for="(menu, i) in menus"
          :key="`menu-${i}`"
        >
          <SidebarMenu :menu="menu" @toggleMenuExpand="toggleMenuExpand(i)" />
          <SidebarSubmenu
            v-if="menu.expand"
            :submenus="menu.children"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/Sidebar/SidebarMenu";
import SidebarLogo from "@/components/Sidebar/SidebarLogo";
import SidebarSubmenu from "@/components/Sidebar/SidebarSubmenu";
import SidebarToggle from "@/components/Sidebar/SidebarToggle";
export default {
  name: 'SidebarContainer',
  components: {SidebarToggle, SidebarSubmenu, SidebarLogo, SidebarMenu},
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
              icon: 'fa-inbox',
              badge: 17
            },
            {
              name: 'Assigned',
              icon: 'fa-user-friends',
              badge: 17
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
      ]
    }
  },
  methods: {
    toggleMenuExpand(id) {
      this.menus[id].expand = !this.menus[id].expand;
    },
    async toggleSidebar() {
      await this.$store.dispatch('toggleSidebarExpand');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
