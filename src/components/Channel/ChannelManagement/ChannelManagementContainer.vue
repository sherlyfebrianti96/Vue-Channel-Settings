<template>
  <div class="p-4 border-solid border border-gray-300 rounded-md">
    <ChannelSearch
      title="Add new channel"
      @keyup="handleChannelSearch"
    />

    <ChannelManagementContent
      :channel-list="filteredChannel"
      @removeChannel="removeChannel"
      @dragAndDropResult="handleDragAndDrop"
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
import DragAndDropMixin from "@/mixins/DragAndDrop";

export default {
  name: 'ChannelManagementContainer',
  components: {ChannelManagementContent, ChannelManagementAction, ChannelSearch},
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
    putChannel() {
      if (this.existingChannel(this.channelKeyword).length === 0) {
        const newItem = {...CHANNEL_ITEM_DEFAULT};
        newItem.name = this.channelKeyword;
        this.tmpChannelList.push(newItem);
        this.resetChannelKeyword();
        this.handleChannelFilter();
      }
    },
    existingChannel(item) {
      const itemIsNotEmpty = item.length > 0;
      const itemHasBeenExist = this.filterChannelList(this.tmpChannelList, item);
      return itemIsNotEmpty && itemHasBeenExist;
    },
    handleChannelFilter() {
      if (this.channelKeyword) {
        this.filteredChannel = this.searchChannelList(this.tmpChannelList, this.channelKeyword);
      } else {
        this.filteredChannel = [...this.tmpChannelList];
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
    },
    handleDragAndDrop(result) {
      /* Get current Drag and Drop Index */
      const originData = this.filteredChannel[result.removedIndex];
      const destinationData = this.filteredChannel[result.addedIndex];

      /* Get the real Index */
      const realOriginIndex = this.findChannelIndex(this.tmpChannelList, originData.name);
      const realDestinationIndex = this.findChannelIndex(this.tmpChannelList, destinationData.name);

      const dragData = { removedIndex: realOriginIndex, addedIndex: realDestinationIndex }

      this.tmpChannelList = this.applyDragAndDrop(this.tmpChannelList, dragData);
      this.handleChannelFilter();
    }
  },
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
