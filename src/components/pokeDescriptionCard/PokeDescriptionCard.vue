<template>
  <div style="background: #ececec; padding: 30px">
    <a-card title="Pokemon Info" :bordered="false" style="width: 300px">
      <p :class="$style.pText">Color: {{currentPokemonData.color.name}}</p>
      <p :class="$style.pText">Baby: {{currentPokemonData["is_baby"]}}</p>
      <p :class="$style.pText">Mythical: {{currentPokemonData["is_mythical"]}}</p>
      <p :class="$style.pText">Legendary: {{currentPokemonData["is_legendary"]}}</p>
      <p :class="$style.pText">Gender rate: {{currentPokemonData["gender_rate"]}}</p>
      <p :class="$style.pText">Shape: {{currentPokemonData.shape.name}}</p>
      <p :class="$style.pText">Habitat: {{currentPokemonData.habitat.name}}</p>
    </a-card>
  </div>

</template>

<script lang="ts" src="./pokeDescriptionCard.ts"></script>

<style lang="scss" module src="./pokeDecriptionCard.module.scss"></style>