<template>
  <div class="absolute top-0 w-full h-screen">
    <div
      class="w-full h-full bg-gray-800 opacity-70 animate-backdrop"
      @click="toggleSidebar"
    />
    <div class="fixed top-0 bg-white h-full w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12 animate-slide">
      <SidebarToggle class="right-2" />

      <SidebarLogo />

      <SidebarMenuWrapper />
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
  methods: {
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
