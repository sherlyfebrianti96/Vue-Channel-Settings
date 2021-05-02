<template>
  <ModalAction
    :actions="modalActions"
    @cancelAction="handleCancel"
    @applyAction="handleApply"
  />
</template>

<script>
import ModalAction from "@/components/Modal/ModalAction";
import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";

export default {
  name: 'ChannelManagementAction',
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
      this.$store.dispatch('channelKeywordUpdate', '');
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.menu);
    },
    handleApply() {
      this.$store.dispatch('channelListUpdate', this.channelList);
      this.$store.dispatch('channelKeywordUpdate', '');
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.menu);
    }
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
