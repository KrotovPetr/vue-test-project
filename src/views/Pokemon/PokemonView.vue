<template>
  <div :class="$style.pokemonPage">
    <div v-if="!currentPokemonData" :class="$style.pokemonLoading">
      <transition-group name="pokeLoading">
        <custom-spinner/>
      </transition-group>
    </div>
    <div v-else :class="$style.pokemonInfo">
      <button @click="toHome($router)" :class="$style.button">	&#8592; На главную</button>
      <poke-doc/>
    </div>
  </div>
</template>

<script lang="ts" src="./pokemonView.ts"></script>
<style lang="scss" module src="./pokemonView.module.scss"></style>