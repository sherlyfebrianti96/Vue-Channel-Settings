<template>
  <div class="p-4 border-solid border border-gray-300 rounded-md">
    <ChannelSearch
      title="Add new channel"
      @keyup="handleChannelSearch"
    />

    <ChannelManagementContent
      :channel-list="filteredChannel"
      @removeChannel="removeChannel"
    />

    <ChannelManagementAction :channel-list="tmpChannelList" />
  </div>
</template>

<script>
import ChannelSearch from "@/components/Channel/ChannelSearch";
import {mapGetters} from "vuex";
import {CHANNEL_ITEM_DEFAULT} from "@/enum/ChannelItemDefault";
import ChannelManagementAction from "@/components/Channel/ChannelManagement/ChannelManagementAction";
import ChannelManagementContent from "@/components/Channel/ChannelManagement/ChannelManagementContent";
import ChannelMixin from "@/mixins/Channel";

export default {
  name: 'ChannelManagementContainer',
  components: {ChannelManagementContent, ChannelManagementAction, ChannelSearch},
  mixins: [ChannelMixin],
  data() {
    return {
      filteredChannel: [],
      tmpChannelList: [],
    };
  },
  created() {
    this.tmpChannelList = this.channelList;
    this.handleChannelFilter();
  },
  computed: {
    ...mapGetters({
      channelList: 'channelList',
      channelKeyword: 'channelKeyword',
    }),
  },
  methods: {
    putChannel() {
      if (this.existingChannel(this.channelKeyword).length === 0) {
        const newItem = {...CHANNEL_ITEM_DEFAULT};
        newItem.name = this.channelKeyword;
        this.tmpChannelList.push(newItem);
        this.$store.dispatch('channelKeywordUpdate', '');
        this.syncLatestData();
      }
    },
    existingChannel(item) {
      const itemIsNotEmpty = item.length > 0;
      const itemHasBeenExist = this.filterChannelList(this.tmpChannelList, item);
      return itemIsNotEmpty && itemHasBeenExist;
    },
    handleChannelFilter() {
      if (this.channelKeyword) {
        this.filteredChannel = this.filterChannelList(this.tmpChannelList, this.channelKeyword);
      } else {
        this.filteredChannel = this.tmpChannelList;
      }
    },
    handleChannelSearch(e) {
      this.handleChannelFilter();
      if (e.key === 'Enter') {
        this.putChannel();
      }
    },
    removeChannel(index) {
      const itemToDelete = this.filteredChannel[index];
      const deleteIndex = this.findChannelIndex(this.tmpChannelList, itemToDelete.name);
      this.tmpChannelList.splice(deleteIndex, 1);
      this.handleChannelFilter();
      this.syncLatestData();
    },
    syncLatestData() {
      this.$emit('syncChannelList', this.tmpChannelList);
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
