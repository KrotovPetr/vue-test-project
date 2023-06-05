<template>
  <div :class="$style.pokemonPage">
    <button @click="toHome($router)" :class="$style.button">	&#8592; На главную</button>
    <div v-if="!currentPokemonData">
      <h1>Подождите</h1>
    </div>
    <div v-else :class="$style.pokemonInfo">
      <poke-doc :data="currentPokemonData"></poke-doc>
    </div>
  </div>
</template>

<script lang="ts" src="./pokemonView.ts"></script>
<style lang="scss" module src="./pokemonView.module.scss"></style>