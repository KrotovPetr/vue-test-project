<template>
  <div :class="$style.container">
    <poke-list></poke-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PokeList from "../../components/pokeList/PokeList.vue";

export default defineComponent({
  name: "HomeView",
  components: {PokeList},
})
</script>

<style module lang="scss" src="./homeView.module.scss"></style>