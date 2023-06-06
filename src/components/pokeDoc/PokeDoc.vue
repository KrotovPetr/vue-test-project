<template>
  <div :class="$style.pokeDoc" >
    <h1>{{currentPokemonData.name}}</h1>
    <div :class="$style.charact">
      <poke-description-card/>
    </div>
  </div>
</template>

<script lang="ts" src="./pokeDoc.ts"></script>
<style lang="scss" src="./pokeDoc.module.scss" module></style>