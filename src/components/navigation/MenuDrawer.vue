<template>
  <nav class="menu_drawer">
    <ul class="list">
      <li @click="onNavigate('/')">
        <font-awesome-icon class="icon-list" icon="medal" color="#22356d"/>
        Ranking
      </li>
      <li @click="onNavigate('/matches')">
        <font-awesome-icon class="icon-list" icon="baseball-ball" color="#22356d"/>
        Partidos
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuDrawer',
  data () {
    return {
    }
  },
  methods: {
    onNavigate (route: string) {
      this.$router.push(route)
      this.$emit('navigate')
    }
  }
})
</script>

<style lang="scss" scoped>
.menu_drawer {
  background-color: #69dfe2;
  z-index: 2;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    border-bottom: solid 1px #22356d;
    padding: 20px 30px 20px 30px;
    text-align: left;
    text-transform: uppercase;
    font-family: 'Fira Sans';
    font-size: 1.25rem;
    font-weight: 500;
    color: #22356d;
    cursor: pointer;
  }

  .icon-list {
    margin-right: 15px;
  }
}
</style>
