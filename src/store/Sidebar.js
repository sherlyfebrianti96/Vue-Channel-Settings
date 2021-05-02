export const SidebarStore = {
  state: {
    sidebarExpand: true,
    sidebarActiveFeature: '',
  },
  getters: {
    sidebarExpand: state => state.sidebarExpand,
    sidebarActiveFeature: state => state.sidebarActiveFeature,
  },
  mutations: {
    sidebarExpandToggle(state) {
      state.sidebarExpand = !state.sidebarExpand;
    },
    sidebarActiveFeatureUpdate(state, feature) {
      state.sidebarActiveFeature = feature;
    }
  },
  actions: {
    sidebarExpandToggle(context) {
      context.commit('sidebarExpandToggle');
    },
    sidebarActiveFeatureUpdate(context, feature) {
      context.commit('sidebarActiveFeatureUpdate', feature);
    }
  },
}