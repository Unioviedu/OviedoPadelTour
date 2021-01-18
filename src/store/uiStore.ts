import { Store } from './index'

interface UiState extends Record<string, any> {
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isLoading: boolean;
}

class UiStore extends Store<UiState> {
  protected data (): UiState {
    return {
      width: 0,
      isMobile: false,
      isTablet: false,
      isLoading: false
    }
  }

  setWidth (width: number) {
    this.state.width = width
    this.state.isMobile = width < 600
  }

  checkWidth (widthCompare: number) {
    return this.state.width < widthCompare
  }

  showMask () {
    this.state.isLoading = true
  }

  hideMask () {
    this.state.isLoading = false
  }
}

export const uiStore: UiStore = new UiStore()
