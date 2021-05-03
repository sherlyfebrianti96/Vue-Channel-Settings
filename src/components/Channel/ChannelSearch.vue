<template>
  <BaseInput
    :placeholder="title"
    :form-control="formControl"
    class="channel-search"
    @keyup="handleKeyup"
  >
    <font-awesome-icon
      icon="search"
      class="absolute top-3 left-2 text-gray-300"
    />
    <slot />
  </BaseInput>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput";
import {mapGetters} from "vuex";

export default {
  name: 'ChannelSearch',
  components: {BaseInput},
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters({
      channelKeyword: 'channelKeyword',
    }),
    formControl() {
      return {
        value: this.channelKeyword
      };
    }
  },
  methods: {
    handleKeyup(e) {
      this.$store.dispatch('channelKeywordUpdate', e.target.value);
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
