
<template>
  <div class="menu_complete">
    <Header :menu="withMenu" @showMenu="onShowMenu" />
    <div class="content" >
        <div :class="{ content_menu_wrapper_show: showMenu }" @click="onClickMenuBackdrop">
          <transition name="slide">
            <MenuDrawer
              ref="menuDrawer"
              v-if="showMenu"
              class="content_menu_drawer"
              @navigate="onNavigate"
            />
          </transition>
        </div>
      <div class="content_slot" :class="{ content_slot_all: !showMenu }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'

import { uiStore } from '@/store/uiStore'
import Header from '@/components/navigation/Header.vue'
import MenuDrawer from '@/components/navigation/MenuDrawer.vue'

export default defineComponent({
  name: 'MenuComplete',
  components: {
    Header,
    MenuDrawer
  },
  setup () {
    const withMenu = ref(true)
    const showMenu = ref(false)

    watchEffect(() => {
      document.body.style.overflow = showMenu.value && uiStore.checkWidth(800)
        ? 'hidden'
        : 'initial'
    })

    function onShowMenu () {
      showMenu.value = !showMenu.value
    }

    function onNavigate () {
      if (uiStore.checkWidth(800)) {
        showMenu.value = false
      }
    }

    function isMenuDrawer (event: any) {
      if (!event.path) {
        return event.composedPath().some((path: any) =>
          path.className && path.className.includes('content_menu_drawer')
        )
      }

      return event.path.some((path: any) =>
        path.className && path.className.includes('content_menu_drawer')
      )
    }

    function onClickMenuBackdrop (event: any) {
      if (!isMenuDrawer(event)) {
        showMenu.value = false
      }
    }

    return { withMenu, showMenu, onShowMenu, onNavigate, isMenuDrawer, onClickMenuBackdrop }
  }
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.6s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 0.4s ease-in 0s
}

.content {
  display: flex;
  margin-top: 50px;

  &_menu_wrapper_show {
    @media (max-width: 800px) {
      z-index: 2;
      position: fixed;
      height: 100%;
      width: 100%;
      transition: background-color 0.3s ease;
      background-color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
    }
  }

  &_menu_drawer {
    position: fixed;
    height: 100%;
    width: 100%;
    max-width: 300px;
    top: 0;
    left: 0;
    padding-top: 55px;

    @media (max-width: 800px) {
      width: 60%;
    }
  }

  &_slot {
    width: 100%;
    @media (min-width: 801px) {
      padding-left: 300px;
    }

    &_all {
      padding: 0;
    }
  }
}
</style>
