<template>
  <MaskLoading :active="active" />
  <Header>
    <router-view />
  </Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { uiStore } from '@/store/uiStore'
import Header from '@/components/navigation/MenuComplete.vue'
import MaskLoading from '@/components/MaskLoading.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    MaskLoading
  },
  data () {
    return {
      active: true
    }
  },
  mounted () {
    this.checkWidth()

    setTimeout(() => {
      this.active = false
    }, 3000)
  },
  methods: {
    checkWidth () {
      uiStore.setWidth(window.innerWidth)
      window.onresize = () => {
        uiStore.setWidth(window.innerWidth)
      }
    }
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
