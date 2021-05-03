<template>
  <div class="p-4 border-solid border border-gray-300 rounded-md">
    <ChannelSearch
      title="Find channel to configure"
      @keyup="handleChannelSearch"
    />

    <ChannelSettingsContent
      :channel-list="filteredChannel"
      @toggleNotification="toggleNotification"
      @toggleActivation="toggleActivation"
    />

    <ChannelSettingsAction />
  </div>
</template>

<script>
import ChannelSearch from "@/components/Channel/ChannelSearch";
import {mapGetters} from "vuex";
import ChannelMixin from "@/mixins/Channel";
import DragAndDropMixin from "@/mixins/DragAndDrop";
import ChannelSettingsContent from "@/components/Channel/ChannelSettings/ChannelSettingsContent";
import ChannelSettingsAction from "@/components/Channel/ChannelSettings/ChannelSettingsAction";

export default {
  name: 'ChannelSettingsContainer',
  components: {ChannelSettingsAction, ChannelSettingsContent, ChannelSearch},
  mixins: [ChannelMixin, DragAndDropMixin],
  data() {
    return {
      filteredChannel: [],
      tmpChannelList: [],
    };
  },
  created() {
    this.tmpChannelList = [...this.channelList];
    this.handleChannelFilter();
  },
  computed: {
    ...mapGetters({
      channelList: 'channelList',
      channelKeyword: 'channelKeyword',
    }),
  },
  methods: {
    handleChannelSearch(e) {
      if (e.key === 'Enter') {
        this.resetChannelKeyword();
      }
      this.handleChannelFilter();
    },
    handleChannelFilter() {
      this.filteredChannel = this.getFilteredChannel(this.tmpChannelList, this.channelKeyword);
    },
    toggleNotification(channel) {
      this.toggleAction(channel, 'notification');
    },
    toggleActivation(channel) {
      this.toggleAction(channel, 'active');
    },
    toggleAction(channel, type) {
      const realIndex = this.findChannelIndex(this.tmpChannelList, channel.name);
      this.tmpChannelList[realIndex][type] = !(this.tmpChannelList[realIndex][type]);
      this.$store.dispatch('channelListUpdate', this.tmpChannelList);
      this.handleChannelFilter();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
