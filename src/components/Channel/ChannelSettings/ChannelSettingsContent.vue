<template>
  <div class="my-3 channel-list overflow-y-scroll">
    <div
      v-for="(channel, i) in channelList"
      :key="`channel-${i}`"
      class="py-3 align-middle relative hover:bg-gray-100"
    >
      <div class="p-2 ml-1 mr-2 inline-flex">
        <font-awesome-icon :icon="getChannelIcon(channel.type)" />
      </div>
      <div class="channel-name inline-flex">
          <span class="overflow-ellipsis whitespace-nowrap overflow-hidden">
            {{ channel.name }}
          </span>
      </div>
      <!--<div
        class="text-lg absolute right-14 top-4 text-yellow-500 hover:text-red-500 cursor-pointer"
        title="Disable Notification"
        @click="toggleNotification(i)"
      >
        <font-awesome-icon icon="bell" />
      </div>-->
      <div
        :class="notificationClass(i)"
        class="text-lg absolute right-14 top-4 cursor-pointer toggle-notification"
        :title="`${channel.notification ? 'Enable' : 'Disable'} Notification`"
        @click="toggleNotification(channel)"
      >
        <font-awesome-icon
          v-if="channel.notification"
          icon="bell"
        />
        <font-awesome-icon
          v-else
          icon="bell-slash"
        />
      </div>
      <!--<div
        class="text-2xl absolute right-2 top-3 text-green-600 hover:text-red-500 cursor-pointer"
        title="Deactivate Channel"
        @click="toggleActivation(i)"
      >
        <font-awesome-icon icon="toggle-on" />
      </div>-->
      <div
        :class="activationClass(i)"
        class="text-2xl absolute right-2 top-3 cursor-pointer toggle-activation"
        :title="`${channel.active ? 'Deactivate' : 'Activate'} Channel`"
        @click="toggleActivation(channel)"
      >
        <font-awesome-icon
          v-if="channel.active"
          icon="toggle-on"
        />
        <font-awesome-icon
          v-else
          icon="toggle-off"
        />
      </div>
    </div>
    <div
      v-if="channelList.length <= 0"
      class="pt-3 px-3 align-middle relative hover:bg-gray-100"
    >
      No channel available.
    </div>
  </div>
</template>

<script>
import ChannelMixin from "@/mixins/Channel";

export default {
  name: 'ChannelSettingsContent',
  mixins: [ChannelMixin],
  props: {
    channelList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    notificationClass() {
      return (index) => {
        return this.channelList[index].notification ? 'text-yellow-500 hover:text-red-500' : 'text-gray-400 hover:text-yellow-500';
      };
    },
    activationClass() {
      return (index) => {
        return this.channelList[index].active ? 'text-green-600 hover:text-red-500' : 'text-gray-500 hover:text-green-600';
      };
    },
  },
  methods: {
    toggleNotification(channel) {
      this.$emit('toggleNotification', channel);
    },
    toggleActivation(channel) {
      this.$emit('toggleActivation', channel);
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
