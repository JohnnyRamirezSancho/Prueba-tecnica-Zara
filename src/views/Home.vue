<script setup>
import { ref, onBeforeMount } from "vue";
import { computed } from "@vue/reactivity";

import ApiRepository from '../assets/ApiRepositories/ApiRepository'

import HeadOne from '../components/HeadOne.vue';
import CardHome from '../components/CardHome.vue'

const repository = new ApiRepository("apple");
const api = repository.chooseApi();
let searchText = ref('');

let podcasts = ref([]);
onBeforeMount(async () => {
  podcasts.value = await api.getAll();
})

const showThisPodcasts = computed(() => {
  if(searchText.value == ""){
    return podcasts;
  }
  let podcastsFiltered = ref([]);
  podcastsFiltered.value = podcasts.value.filter(podcast => podcast.name.toLowerCase().indexOf(searchText.value.toLocaleLowerCase));
  console.log(podcastsFiltered.value)
  return podcastsFiltered
});


</script>

<template>
  <main>
    <HeadOne></HeadOne>
    <div id="searchPodcast">
      <p class="totalResult">{{ showThisPodcasts.value.length }}</p>
      <input v-model="searchText" type="text" class="search" id="search" placeholder="Filter podcast..." required>
    </div>
    <div class="cardsPodcasts">
      <CardHome v-for="podcast in showThisPodcasts.value" :podcast="podcast"></CardHome>
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
