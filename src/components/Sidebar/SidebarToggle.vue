<template>
  <div
    class="sidebar-toggle absolute top-4 cursor-pointer p-2"
    @click="toggle"
  >
    <font-awesome-icon
      icon="bars"
      class="text-2xl text-gray-500"
    />
  </div>
</template>

<script>
export default {
  name: 'SidebarToggle',
  methods: {
    toggle() {
      this.$store.dispatch('sidebarExpandToggle');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
