<template>
  <div class="text-xs absolute leading-6 align-middle right-3 top-2 text-gray-400 cursor-pointer menu-action">
    <span
      v-for="(action, i) in actions"
      :key="`menu-${action.name}-action-${i}`"
      :title="action.name"
      class="p-1 ml-2 hover:text-gray-800 z-10"
      @click="toggleMenuExpand(action.emitter)"
    >
      <font-awesome-icon :icon="action.icon" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SidebarAction',
  props: {
    actions: {
      type: Array,
      required: true,
    }
  },
  methods: {
    toggleMenuExpand(emitter) {
      this.$emit(emitter);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
