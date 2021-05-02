<template>
  <div
    class="h-screen w-10/12 md:w-6/12 lg:w-6/12 xl:w-2/12 inline-block border-r border-solid border-gray-300 animate-slide"
  >
    <SidebarLogo />

    <SidebarMenuWrapper v-if="mainFeature" />

    <div
      v-else
      class="p-3 cursor-pointer text-green-600 bg-gray-200"
      @click="openMainFeature"
    >
      <i class="fas fa-arrow-left text-xs align-middle" />
      <span class="ml-2">
        Back to Main Menu
      </span>
    </div>

    <div v-if="channelSettingsFeature">
      sidebarFeature.channel.settings
    </div>

    <div v-if="channelManagementFeature">
      <ChannelManagement />
    </div>
  </div>
</template>

<script>
import SidebarLogo from "@/components/Sidebar/SidebarLogo";
import SidebarMenuWrapper from "@/components/Sidebar/SidebarMenuWrapper";
import {mapGetters} from "vuex";
import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";
import ChannelManagement from "@/components/Channel/ChannelManagement";

export default {
  name: 'SidebarContainer',
  components: {ChannelManagement, SidebarMenuWrapper, SidebarLogo},
  computed: {
    ...mapGetters({
      sidebarActiveFeature: 'sidebarActiveFeature',
    }),
    mainFeature() {
      return (this.sidebarActiveFeature === SIDEBAR_FEATURE.menu);
    },
    channelSettingsFeature() {
      return (this.sidebarActiveFeature === SIDEBAR_FEATURE.channel.settings);
    },
    channelManagementFeature() {
      return (this.sidebarActiveFeature === SIDEBAR_FEATURE.channel.management);
    }
  },
  created() {
    this.openMainFeature();
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('sidebarExpandToggle');
    },
    openMainFeature() {
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.menu);
    }
  },
  unmounted() {
    /* Reset all state */
    this.openMainFeature();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
