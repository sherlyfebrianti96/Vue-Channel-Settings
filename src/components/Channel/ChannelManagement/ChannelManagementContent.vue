<template>
  <Container
    class="my-3 channel-list overflow-y-scroll"
    @drop="handleOnDrop"
  >
    <Draggable
      v-for="(channel, i) in channelList"
      :key="`channel-${i}`"
      class="py-3 align-middle relative hover:bg-gray-100"
    >
      <font-awesome-icon
        icon="grip-vertical"
        class="mx-2 text-gray-300 inline-flex"
      />
      <div class="p-2 ml-1 mr-2 bg-gray-200 rounded-sm inline-flex">
        <font-awesome-icon :icon="getChannelIcon(channel.type)" />
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
    </Draggable>
    <div
      v-if="channelList.length <= 0"
      class="pt-3 px-3 align-middle relative hover:bg-gray-100"
    >
      No channel available.
    </div>
  </Container>
</template>

<script>
import ChannelMixin from "@/mixins/Channel";
import { Container, Draggable } from "vue-smooth-dnd";

export default {
  name: 'ChannelManagementContent',
  components: {Container, Draggable },
  mixins: [ChannelMixin],
  props: {
    channelList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    removeChannel(index) {
      this.$emit('removeChannel', index);
    },
    handleOnDrop(dropResult) {
      this.$emit('dragAndDropResult', dropResult);
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
