<template src="./template.html"> </template>

<script lang="ts">
import PlayerRankingCard from '@/components/PlayerRankingCard.vue'
import MatchCard from '@/components/MatchCard.vue'
import { defineComponent } from 'vue'

import RankingService from '@/services/RankingService.ts'

export default defineComponent({
  name: 'RankingView',
  components: {
    PlayerRankingCard,
    MatchCard
  },
  data () {
    return {
      rankingService: RankingService.getInstance(),
      ranking: []
    }
  },
  async mounted () {
    this.ranking = await this.rankingService.findRanking.execute() as any
  }
})
</script>

<style scoped lang="scss" src="./styles.scss" />
