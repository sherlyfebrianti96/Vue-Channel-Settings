import { createStore } from 'vuex'
import {SidebarStore} from "@/store/Sidebar";
import {ChannelStore} from "@/store/Channel";

export default createStore({
  modules: {
    sidebar: SidebarStore,
    channel: ChannelStore
  }
})
