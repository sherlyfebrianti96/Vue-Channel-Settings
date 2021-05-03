<template>
  <ModalAction
    :actions="modalActions"
    @closeAction="handleClose"
  />
</template>

<script>
import ModalAction from "@/components/Modal/ModalAction";
import ChannelMixin from "@/mixins/Channel";
import SidebarMixin from "@/mixins/Sidebar";

export default {
  name: 'ChannelSettingsAction',
  components: {ModalAction},
  mixins: [ChannelMixin, SidebarMixin],
  data() {
    return {
      modalActions: [
        {
          name: 'close',
          label: 'Close',
          emitter: 'closeAction',
          className: 'bg-black text-white hover:bg-gray-700'
        }
      ],
    };
  },
  methods: {
    handleClose() {
      this.resetChannelKeyword();
      this.sidebarOpenMainFeature();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.channel-name {
  max-width: calc(100% - 140px);
}
.channel-list {
  max-height: 50vh;
}
</style>
