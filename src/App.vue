<template>
  <div class="relative top-0">
    <SidebarContainer v-if="sidebarExpand" />
    <div
      class="container mx-auto pt-10 pb-6 inline-block relative align-top"
      :class="containerWidth"
    >
      <SidebarToggle class="left-4" />
      <HelloWorld
          msg="Welcome to Your Vue.js App"
          class="text-center"
      />
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SidebarContainer from "@/components/Sidebar/SidebarContainer";
import { mapGetters } from 'vuex';
import SidebarToggle from "@/components/Sidebar/SidebarToggle";

export default {
  name: 'App',
  components: {
    SidebarToggle,
    SidebarContainer,
    HelloWorld
  },
  computed: {
    ...mapGetters({
      sidebarExpand: 'sidebarExpand',
    }),
    containerWidth() {
      if (this.sidebarExpand) {
        return 'md:w-6/12 lg:w-6/12 xl:w-10/12'
      }
      return 'w-full max-w-full';
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.sidebar {
  width: 40%;
}
</style>
