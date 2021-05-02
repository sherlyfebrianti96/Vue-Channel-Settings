<template>
  <div class="relative top-0">
    <SidebarContainer v-if="sidebarExpand" />
    <div
      class="container mx-auto pt-10 pb-6 inline-block relative align-top"
      :class="containerWidth"
    >
      <SidebarToggle class="left-4" />
      <HelloWorld
          msg="Welcome to Your Vue.js App"
          class="text-center"
      />
    </div>
  </div>
  <!-- Modal -->
  <ChannelAction v-if="!isMainFeatureActive" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SidebarContainer from "@/components/Sidebar/SidebarContainer";
import { mapGetters } from 'vuex';
import SidebarToggle from "@/components/Sidebar/SidebarToggle";
import ChannelAction from "@/components/Channel/ChannelAction";
import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";
import {DATA_CHANNEL_LIST} from "@/data/ChannelList";

export default {
  name: 'App',
  components: {
    ChannelAction,
    SidebarToggle,
    SidebarContainer,
    HelloWorld
  },
  computed: {
    ...mapGetters({
      sidebarExpand: 'sidebarExpand',
      sidebarActiveFeature: 'sidebarActiveFeature',
      channelList: 'channelList',
    }),
    containerWidth() {
      if (this.sidebarExpand) {
        return 'md:w-6/12 lg:w-6/12 xl:w-10/12'
      }
      return 'w-full max-w-full';
    },
    isMainFeatureActive() {
      return this.sidebarActiveFeature === SIDEBAR_FEATURE.menu;
    }
  },
  created() {
    this.openMainFeature();
    this.setDefaultChannelList();
  },
  methods: {
    openMainFeature() {
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.menu);
    },
    setDefaultChannelList() {
      if (this.channelList.length <= 0) {
        this.$store.dispatch('channelListUpdate', DATA_CHANNEL_LIST);
      }
    }
  },
}
</script>

<style>
</style>
