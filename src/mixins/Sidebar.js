import {SIDEBAR_FEATURE} from "@/enum/SidebarFeature";

const SidebarMixin = {
  methods: {
    sidebarOpenMainFeature() {
      this.$store.dispatch('sidebarActiveFeatureUpdate', SIDEBAR_FEATURE.menu);
    }
  }
};

export default SidebarMixin;
