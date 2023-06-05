<template>
    <div :class="$style.pokeDoc" >
      <h1>{{currentPokemonData.name}}</h1>
      <div :class="$style.charact">
        <p :class="$style.pText">Color: {{currentPokemonData.color.name}}</p>
        <p :class="$style.pText">Baby: {{currentPokemonData["is_baby"]}}</p>
        <p :class="$style.pText">Mythical: {{currentPokemonData["is_mythical"]}}</p>
        <p :class="$style.pText">Legendary: {{currentPokemonData["is_legendary"]}}</p>
        <p :class="$style.pText">Gender rate: {{currentPokemonData["gender_rate"]}}</p>
        <p :class="$style.pText">Shape: {{currentPokemonData.shape.name}}</p>
        <p :class="$style.pText">Habitat: {{currentPokemonData.habitat.name}}</p>
        <h3 :class="$style.subHeader">Другие имена</h3>
        <div :class="$style.namesContainer">
          <div :class="$style.charactHeader">
            <div :class="$style.header">Язык</div>
            <div :class="$style.header">Ссылка</div>
            <div :class="$style.header">Имя</div>
          </div>
<!--          <div v-for="name in currentPokemonData.names" :key="generateUuid(name)" :class="$style.nameData">-->
<!--            <div :class="$style.header">{{currentPokemonData.language.name}}</div>-->
<!--            <div :class="$style.header">{{currentPokemonData.language.url}}</div>-->
<!--            <div :class="$style.header">{{currentPokemonData.name}}</div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
</template>

<script lang="ts" src="./pokeDoc.ts"></script>
<style lang="scss" src="./pokeDoc.module.scss" module></style>