<template>
  <div
    class="h-screen w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12 inline-block border-r border-solid border-gray-300 animate-slide relative"
  >
    <SidebarToggle
      v-if="sidebarExpand"
      class="md:hidden z-10 right-4"
    />
    <SidebarLogo />
    <SidebarMenuWrapper />
  </div>
</template>

<script>
import SidebarLogo from "@/components/Sidebar/SidebarLogo";
import SidebarMenuWrapper from "@/components/Sidebar/SidebarMenuWrapper";
import {mapGetters} from "vuex";
import SidebarToggle from "@/components/Sidebar/SidebarToggle";

export default {
  name: 'SidebarContainer',
  components: {SidebarToggle, SidebarMenuWrapper, SidebarLogo},
  computed: {
    ...mapGetters({
      sidebarActiveFeature: 'sidebarActiveFeature',
      sidebarExpand: 'sidebarExpand',
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
