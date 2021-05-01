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
  props: {
    menus: {
      type: Array,
      required: true,
    }
  },
  methods: {
    toggleMenuExpand(id) {
      this.$emit('toggleMenuExpand', id);
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
