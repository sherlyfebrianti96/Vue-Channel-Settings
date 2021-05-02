<template>
  <button
    :name="name"
    type="button"
    class="px-5 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-100"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.channel-name {
  max-width: calc(100% - 140px);
}
</style>
