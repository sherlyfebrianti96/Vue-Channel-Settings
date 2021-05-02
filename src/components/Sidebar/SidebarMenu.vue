<template>
  <div
    class="relative cursor-pointer pt-2 pb-2 pl-10 pr-5 hover:bg-gray-100"
    @click="toggleMenuExpand"
  >
    <span
      v-if="menu.expand"
      class="absolute left-5 h-full"
    >
      <font-awesome-icon
        icon="chevron-down"
        class="text-xs"
      />
    </span>
    <span
      v-else
      class="absolute left-5 h-full"
    >
      <font-awesome-icon
        icon="chevron-right"
        class="text-xs"
      />
    </span>
    <strong>
      {{ menu.name }}
    </strong>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    menu: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleMenuExpand() {
      this.$emit('toggleMenuExpand');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
