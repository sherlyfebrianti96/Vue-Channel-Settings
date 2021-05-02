import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";

const sidebarMixin = {
  methods: {
    sidebarOpenMainFeature() {
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.menu);
    }
  }
};

export default sidebarMixin;
