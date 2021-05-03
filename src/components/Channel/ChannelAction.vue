<template>
  <ModalWrapper header="Channels" key="channel">
    <ChannelManagementContainer v-if="activeChannelManagement" />
    <ChannelSettingsContainer v-if="activeChannelSettings" />
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modal/ModalWrapper";
import ChannelManagementContainer from "@/components/Channel/ChannelManagement/ChannelManagementContainer";
import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";
import ChannelSettingsContainer from "@/components/Channel/ChannelSettings/ChannelSettingsContainer";
import {mapGetters} from "vuex";
export default {
  name: 'ChannelAction',
  components: {ChannelSettingsContainer, ChannelManagementContainer, ModalWrapper},
  computed: {
    ...mapGetters({
      sidebarActiveFeature: 'sidebarActiveFeature',
    }),
    activeChannelManagement() {
      return this.sidebarActiveFeature === SIDEBAR_FEATURE.channel.management;
    },
    activeChannelSettings() {
      return this.sidebarActiveFeature === SIDEBAR_FEATURE.channel.settings;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
