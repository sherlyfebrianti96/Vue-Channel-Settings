<template>
  <div class="text-right pt-2">
    <BaseButton
      v-for="(action, i) in actions"
      :key="`action-${i}`"
      :name="action.name"
      :class="action.className"
      class="first:ml-0 ml-2"
      @click="handleClick(action.emitter)"
    >
      {{ action.label }}
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton";
export default {
  name: 'ModalAction',
  components: {BaseButton},
  props: {
    actions: {
      type: Array,
      default: () => {
        return [{
          name: 'button',
          label: 'Button',
          emitter: 'buttonAction',
          className: ''
        }];
      }
    }
  },
  methods: {
    handleClick(emitter) {
      this.$emit(emitter);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
