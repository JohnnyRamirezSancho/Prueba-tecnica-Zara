<script setup>
import HeadOne from '../components/HeadOne.vue';
import CardHome from '../components/CardHome.vue'

let totalResultSearch = 100;

</script>

<template>
  <main>
    <HeadOne></HeadOne>
    <div id="searchPodcast">
      <p class="totalResult">{{ totalResultSearch }}</p>
      <input v-model="searchText" type="text" class="search" id="search" placeholder="Filter podcast..." required>
    </div>
    <div class="cardsPodcasts">
      <CardHome></CardHome>
      <CardHome></CardHome>
      <CardHome></CardHome>
      <CardHome></CardHome>
      <CardHome></CardHome>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

main {
  font-family: Inter;

  #searchPodcast {
    display: flex;
    justify-content: end;

    p {
      margin: 0;
      padding: 4px 7px;
      background: $Blue;
      color: $White;
      border-radius: 5px;
    }

    input {
      margin-left: 15px;
      border: 1px solid $GrayMidLight;
      border-radius: 5px;
      font-size: 1rem;

      &:focus {
        outline: solid 1px $GrayMid;
      }
    }
  }
  .cardsPodcasts {
    margin-top: 35px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);

  }
}
</style>
