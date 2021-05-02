<template>
  <div class="relative cursor-pointer pl-10 pr-5 pt-1 pb-1 text-gray-500 hover:bg-gray-100">
    <i
      class="fas text-sm"
      :class="submenu.icon"
    />
    <span class="ml-3">
      {{ submenu.name }}
    </span>
    <span
      v-if="submenu.badge"
      class="text-sm absolute leading-6 align-middle right-6"
    >
      {{ submenu.badge }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SidebarSubmenu',
  props: {
    submenu: {
      type: Object,
      required: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
