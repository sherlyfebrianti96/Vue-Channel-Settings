<template>
  <ModalWrapper header="Channels" key="channel">
    <ChannelManagementContainer />
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modal/ModalWrapper";
import ChannelManagementContainer from "@/components/Channel/ChannelManagement/ChannelManagementContainer";
export default {
  name: 'ChannelAction',
  components: {ChannelManagementContainer, ModalWrapper},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
