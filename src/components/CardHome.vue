<script setup>

const props = defineProps({
  podcast: {
    type: Object,
  },
});


</script>
<template>
  <div class="cardPostcast">
    <figure>
      <img
        :src="podcast.image"
        :alt="podcast.name"
      />
    </figure>
    <h2>{{ podcast.name}}</h2>
    <p>Autor del podcast</p>
  </div>
</template>

<style lang="scss" scoped>
@import url("../assets/scss/global.scss");

.cardPostcast {
  margin: 35px auto 0 auto;
  padding-bottom: 12px;
  width: 100%;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 8px rgba(128, 128, 128, 0.5);
  }
  &:hover img {
    transform: scale(1.2) rotate(360deg);
  }

  figure {
    width: 70px;
    height: 70px;
    margin: -35px auto 12px auto;

    img {
      width: 100%;
      border-radius: 50%;
      transition: all 0.5s;
    }
  }

  h2 {
    font-size: 1rem;
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>
