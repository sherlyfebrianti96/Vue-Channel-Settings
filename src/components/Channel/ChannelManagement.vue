<template>
  <div class="p-4 border-solid border border-gray-300 rounded-md">
    <ChannelSearch
      title="Add new channel"
      @keyup="handleChannelSearch"
    />
    <div class="my-3 channel-list overflow-y-scroll">
      <div
        v-for="(channel, i) in filteredChannel"
        :key="`channel-${i}`"
        class="py-3 align-middle relative hover:bg-gray-100"
      >
        <i class="fas fa-grip-vertical mx-2 text-gray-300 inline-flex" />
        <div class="p-2 ml-1 mr-2 bg-gray-200 rounded-sm inline-flex">
          <i class="fab fa-whatsapp" />
        </div>
        <div class="channel-name inline-flex">
          <span class="overflow-ellipsis whitespace-nowrap overflow-hidden">
            {{ channel.name }}
          </span>
        </div>
        <div
          class="text-xs text-gray-400 p-1 absolute right-2 top-4 hover:text-red-600 cursor-pointer"
          @click="removeChannel(i)"
        >
          Remove
        </div>
      </div>
      <div
        v-if="filteredChannel.length <= 0"
        class="pt-3 px-3 align-middle relative hover:bg-gray-100"
      >
        No channel available.
      </div>
    </div>
  </div>
</template>

<script>
import ChannelSearch from "@/components/Channel/ChannelSearch";
import {mapGetters} from "vuex";
import {CHANNEL_ITEM_DEFAULT} from "@/enum/ChannelItemDefault";

export default {
  name: 'ChannelManagement',
  components: {ChannelSearch},
  data() {
    return {
      filteredChannel: [],
    }
  },
  created() {
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
        const newItem = CHANNEL_ITEM_DEFAULT;
        newItem.name = this.channelKeyword;
        const newChannelList = this.channelList;
        newChannelList.push(newItem);
        this.$store.dispatch('channelListUpdate', newChannelList);
        this.$store.dispatch('channelKeywordUpdate', '');
      }
    },
    existingChannel(item) {
      const itemIsNotEmpty = item.length > 0;
      const itemHasBeenExist = this.channelList.filter(channel => (channel.name.toLowerCase() === item.toLowerCase()));
      return itemIsNotEmpty && itemHasBeenExist;
    },
    handleChannelFilter() {
      if (this.channelKeyword) {
        this.filteredChannel = this.channelList.filter(channel => channel.name.toLowerCase().includes(this.channelKeyword.toLowerCase()));
      } else {
        this.filteredChannel = this.channelList;
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
      const deleteIndex = this.channelList.findIndex(item => {
        if (item.name.toLowerCase() === itemToDelete.name.toLowerCase()) {
          return true;
        }
      });
      const channelList = this.channelList;
      channelList.splice(deleteIndex, 1);
      this.$store.dispatch('channelListUpdate', channelList);
      this.handleChannelFilter();
    },
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
