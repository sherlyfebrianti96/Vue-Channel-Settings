<template>
  <ModalWrapper header="Channels">
    <ChannelManagement />
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modal/ModalWrapper";
import ChannelManagement from "@/components/Channel/ChannelManagement";
export default {
  name: 'ChannelAction',
  components: {ChannelManagement, ModalWrapper},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
