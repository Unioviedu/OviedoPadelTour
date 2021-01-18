<template>
  <div class="card">
    <div class="teams">
      <div class="team team1">
        <div class="team_img">
          <img :src="avatar" alt="Avatar">
        </div>
        <div class="team_players">
          <span>Eduardo Martinez</span>
          <span>Mateo Juarez</span>
        </div>
        <div class="team_img">
          <img :src="avatar" alt="Avatar">
        </div>
      </div>
      <div class="team team2">
        <div class="team_img">
          <img :src="avatar" alt="Avatar">
        </div>
        <div class="team_players">
          <span>Eduardo Martinez</span>
          <span>Mateo Juarez</span>
        </div>
        <div class="team_img">
          <img :src="avatar" alt="Avatar">
        </div>
      </div>
    </div>
    <div class="results">
      <div class="set">
        <div class="set_number set_number1">
          6
        </div>
        <div class="set_number">
          3
        </div>
      </div>
      <div class="set">
        <div class="set_number set_number1">
          4
        </div>
        <div class="set_number">
          6
        </div>
      </div>
      <div class="set">
        <div class="set_number set_number1">
          7
        </div>
        <div class="set_number">
          6
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import avatar from '@/assets/images/avatar.svg'

export default defineComponent({
  name: 'MatchCard',
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
  flex-wrap: wrap;
  background-color:#22356d;
  //min-height: 180px;
  border-radius: 10px;

  .teams {
    display: flex;
    flex: 2;
    min-height: 150px;
    min-width: 200px;
    flex-direction: column;
    font-size: 1em;
    font-weight: 700;
    color: #69dfe2;
    text-align: left;
    border-top: 1px solid white;

    .team {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex: 1;
      border-right: 1px solid white;

      &_img {
        height: 2em;

        img {
          height: 100%;
        }
      }

      &_players {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .team1 {
      border-bottom: 1px solid white;
    }

    .team2 {
      opacity: 0.5;
    }
  }

  .results {
    display: flex;
    flex: 1;
    min-height: 100px;
    min-width: 120px;
    border-top: 1px solid white;

    .set {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: 1.4rem;
      font-weight: 700;
      color: white;

      &_number {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-right: 1px solid white;
      }

      &_number1 {
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
