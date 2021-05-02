<template>
  <div
    class="h-screen w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12 inline-block border-r border-solid border-gray-300 animate-slide"
  >
    <SidebarLogo />
    <SidebarMenuWrapper />
  </div>
</template>

<script>
import SidebarLogo from "@/components/Sidebar/SidebarLogo";
import SidebarMenuWrapper from "@/components/Sidebar/SidebarMenuWrapper";
import {mapGetters} from "vuex";

export default {
  name: 'SidebarContainer',
  components: {SidebarMenuWrapper, SidebarLogo},
  computed: {
    ...mapGetters({
      sidebarActiveFeature: 'sidebarActiveFeature',
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
