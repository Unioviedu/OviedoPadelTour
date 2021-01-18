<template>
  <div class="card">
    <div class="card_position">
      <span class="number">{{ position }}</span>
    </div>
    <div class="card_personal-info">
      <div class="player-info">
        <div class="player-info_name">
          {{ name }}
        </div>
        <div class="player-info_results">
          {{ wins }} - {{ defeats }}
        </div>
      </div>
      <div class="player-img">
        <img :src="avatar" alt="Avatar">
      </div>
    </div>
    <div class="card_points">
      <div class="points">
        {{ percentage }} %
      </div>
      <div class="show-icon">

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import avatar from '@/assets/images/avatar.svg'

export default defineComponent({
  name: 'PlayerRankingCard',
  props: {
    position: Number,
    name: String,
    wins: Number,
    defeats: Number,
    percentage: Number
  },
  data () {
    return {
      avatar
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  height: 95px;
  border-bottom-left-radius: 50px 50px;
  border-top-left-radius: 50px 50px;
  background-color:#22356d;

  &_position {
    display: flex;
    min-width: 85px;
    align-items: center;
    justify-content: center;
    height: 85px;
    border-radius: 50%;
    border: 5px solid #22356d;
    background-color: #69dfe2;

    .number {
      line-height: 4.6rem;
      font-size: 3.5rem;
      font-weight: 700;
      color: #22356d;
    }
  }

  &_personal-info {
    display: flex;
    flex: 3;
    justify-content: space-evenly;
    align-items: center;

    .player-img {
      flex: 1;
      border-radius: 50%;
      height: 70px;

      img {
        height: 100%;
      }
    }

    .player-info {
      flex: 1;
      &_name {
        font-size: 1.4em;
        font-weight: 700;
        color: #69dfe2;
      }

      &_results {
        font-size: 1.2rem;
        font-weight: 700;
        color: white;
      }
    }
  }

  &_points {
    display: flex;
    flex: 1.5;
    justify-content: space-evenly;

    .points {
      font-size: 1.4rem;
      font-weight: 700;
      color: white;
    }

    .show-icon {

    }
  }
}
</style>
