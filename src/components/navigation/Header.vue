<template>
  <div class="header">
    <div class="header_left">
      <font-awesome-icon v-if="menu" icon="bars" color="white"
                         size="2x" @click="onClickBars"
      />
    </div>
    <div class="header_center">
      <img :src="logo" />
    </div>
    <div class="header_right" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/images/logo.svg'

export default defineComponent({
  name: 'Header',
  props: {
    menu: Boolean
  },
  data () {
    return {
      logo
    }
  },
  methods: {
    onClickBars () {
      this.$emit('show-menu')
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #22356d;
  left: 0;
  height: 55px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;

  &_left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
  }

  &_center {
    flex: 5;

    img {
      height: 40px;
    }
  }

  &_right {
    flex: 1;
  }
}
</style>
