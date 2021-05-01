export const SidebarStore = {
  state: {
    sidebarExpand: true,
  },
  getters: {
    sidebarExpand: state => state.sidebarExpand,
  },
  mutations: {
    toggleSidebarExpand(state) {
      state.sidebarExpand = !state.sidebarExpand;
    }
  },
  actions: {
    toggleSidebarExpand(context) {
      context.commit('toggleSidebarExpand');
    }
  },
}