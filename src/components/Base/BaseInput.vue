<template>
  <div class="mb-3 relative">
    <input
      v-model="inputValue"
      type="text"
      class="border-solid border border-gray-300 rounded-md w-full py-2 pl-7 pr-16"
      :placeholder="placeholder"
      @change="inputChange"
      @keyup="handleKeyup"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      required: true,
    }
  },
  computed: {
    inputValue() {
      return this.value;
    }
  },
  methods: {
    inputChange(e) {
      this.$emit('change', e);
    },
    handleKeyup(e) {
      this.$emit('keyup', e);
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
