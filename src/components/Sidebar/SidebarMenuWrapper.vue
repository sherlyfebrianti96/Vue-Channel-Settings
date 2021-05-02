<template>
  <div class="menus-container mt-2">
    <div
      v-for="(menu, i) in menus"
      :key="`menu-${i}`"
      class="relative"
    >
      <SidebarMenu
        :menu="menu"
        @toggleMenuExpand="toggleMenuExpand(i)"
      />
      <SidebarAction
        v-if="menu.actions"
        :actions="menu.actions"
        @channelSettings="openChannelSettings"
        @channelManagement="openChannelManagement"
      />
      <SidebarSubmenu
        v-if="menu.expand"
        :submenus="menu.children"
      />
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/Sidebar/SidebarMenu";
import SidebarSubmenu from "@/components/Sidebar/SidebarSubmenu";
import SidebarAction from "@/components/Sidebar/SidebarAction";
import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";
import {mapGetters} from "vuex";
import ChannelMixin from "@/mixins/Channel";
import {DATA_MENU_LIST} from "@/data/MenuList";

export default {
  name: 'SidebarMenuWrapper',
  components: {SidebarAction, SidebarSubmenu, SidebarMenu},
  mixins: [ChannelMixin],
  data() {
    return {
      menus: DATA_MENU_LIST,
      channelFeatureIndex: 0
    };
  },
  computed: {
    ...mapGetters({
      channelList: 'channelList',
    }),
  },
  created() {
    this.channelFeatureIndex = this.menus.findIndex(menu => (menu.name === 'Channels'));
    this.syncChannelList();
  },
  watch: {
    channelList() {
      this.syncChannelList();
    }
  },
  methods: {
    toggleMenuExpand(id) {
      this.menus[id].expand = !this.menus[id].expand;
    },
    openChannelSettings() {
      console.log('open channel settings clicked');
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.channel.settings);
    },
    openChannelManagement() {
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.channel.management);
    },
    syncChannelList() {
      this.menus[this.channelFeatureIndex].children = this.channelList.map(channel => {
        return {name: channel.name, icon: this.getChannelIcon(channel.type)};
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
