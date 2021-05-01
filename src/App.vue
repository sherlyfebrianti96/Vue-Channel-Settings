<template>
  <div class="relative top-0">
    <SidebarContainer />
    <div class="container mx-auto pt-10 pb-6">
      <HelloWorld
          msg="Welcome to Your Vue.js App"
          class="text-center"
      />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SidebarContainer from "@/components/Sidebar/SidebarContainer";

export default {
  name: 'App',
  components: {
    SidebarContainer,
    HelloWorld
  }
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
