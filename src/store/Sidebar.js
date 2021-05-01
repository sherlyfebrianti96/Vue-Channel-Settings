export const SidebarStore = {
  state: {
    sidebarExpand: false,
  },
  getters: {
    sidebarExpand: state => state.sidebarExpand,
  },
  mutations: {
    sidebarExpandToggle(state) {
      state.sidebarExpand = !state.sidebarExpand;
    }
  },
  actions: {
    sidebarExpandToggle(context) {
      context.commit('sidebarExpandToggle');
    }
  },
}