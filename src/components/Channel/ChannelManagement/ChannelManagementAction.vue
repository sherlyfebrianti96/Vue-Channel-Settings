<template>
  <ModalAction
    :actions="modalActions"
    @cancelAction="handleCancel"
    @applyAction="handleApply"
  />
</template>

<script>
import ModalAction from "@/components/Modal/ModalAction";
import SidebarMixin from "@/mixins/Sidebar";
import ChannelMixin from "@/mixins/Channel";

export default {
  name: 'ChannelManagementAction',
  mixins: [SidebarMixin, ChannelMixin],
  components: {ModalAction},
  props: {
    channelList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      modalActions: [
        {
          name: 'cancel',
          label: 'Cancel',
          emitter: 'cancelAction',
          className: ''
        },
        {
          name: 'apply',
          label: 'Apply',
          emitter: 'applyAction',
          className: 'bg-black text-white hover:bg-gray-700'
        }
      ],
    };
  },
  methods: {
    handleCancel() {
      this.resetChannelKeyword();
      this.sidebarOpenMainFeature();
    },
    handleApply() {
      this.$store.dispatch('channelListUpdate', this.channelList);
      this.resetChannelKeyword();
      this.sidebarOpenMainFeature();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
