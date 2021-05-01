import { createStore } from 'vuex'
import {SidebarStore} from "@/store/Sidebar";

export default createStore({
  ...SidebarStore,
})
