<template>
  <div :class="$style.pokeList">
    <div v-for="pokemon in pokemonData" :key="pokemon.id" :class="$style.card">
      <poke-card :data="pokemon"></poke-card>
    </div>

  </div>
  <div :class="$style.pagination"></div>
</template>

<script lang="ts" src="./pokeList.ts"></script>

<style lang="scss" module src="./pokeList.module.scss"></style>