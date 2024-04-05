// composable for the banner ui, can be called in any component so we'll need to keep the showBanner global
import { ref } from "vue";

const showBannerUI = ref(false);

function showBanner() {
  showBannerUI.value = true;
}

function dismissBanner() {
  showBannerUI.value = false;
}

export function useBanner() {
  return {
    showBannerUI,
    showBanner,
    dismissBanner,
  };
}
