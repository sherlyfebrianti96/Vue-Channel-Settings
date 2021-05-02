<template>
  <div class="p-4 border-solid border border-gray-300 rounded-md">
    <div class="mb-3 relative">
      <input
        type="text"
        class="border-solid border border-gray-300 rounded-md w-full py-2 pl-7 pr-16"
        placeholder="Add new channel"
      />
      <i
        class="fas fa-search absolute top-3 left-2 text-gray-300"
      />
      <div class="absolute top-3 right-5 text-gray-400 text-xs align-middle">
        Enter
      </div>
    </div>
    <div class="my-3">
      <div
        v-for="(channel, i) in channels"
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
        <div class="text-xs text-gray-400 p-1 absolute right-2 top-4 hover:text-red-600 cursor-pointer">
          Remove
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelManagement',
  data() {
    return {
      channels: [
        {
          name: 'Team@trengo.com',
          type: 'phone',
          active: true,
          notification: false,
        },
        {
          name: 'Call Center',
          type: 'phone',
          active: true,
          notification: false,
        },
        {
          name: 'Whatsapp Business',
          type: 'whatsapp',
          active: true,
          notification: false,
        },
        {
          name: '(test) development California',
          type: 'email',
          active: true,
          notification: false,
        },
        {
          name: 'Whatsapp Business Iceland',
          type: 'whatsapp',
          active: true,
          notification: false,
        }
      ],
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.channel-name {
  max-width: calc(100% - 140px);
}
</style>
