<template src="./template.html" />

<script lang="ts">
import MatchCard from '@/components/MatchCard.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MatchesView',
  components: {
    MatchCard
  }
})
</script>

<style scoped lang="scss" src="./styles.scss" />
