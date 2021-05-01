<template>
  <div
    class="absolute top-4 cursor-pointer p-2"
    @click="toggle"
  >
    <i class="fas fa-bars text-2xl text-gray-500" />
  </div>
</template>

<script>
export default {
  name: 'SidebarToggle',
  methods: {
    async toggle() {
      await this.$store.dispatch('toggleSidebarExpand');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
