import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import {SidebarStore} from "@/store/Sidebar";
import {ChannelStore} from "@/store/Channel";

Vue.use(Vuex);

export const store = new Store({
  modules: {
    sidebar: SidebarStore,
    channel: ChannelStore
  }
});
