<template>
  <div :class="$style.cardBody">
    <h1 :class="$style.header">{{data.name}}</h1>
    <button :class="$style.button" @click="toPokemonPage($router, data.name)">Подробнее...</button>
  </div>
</template>

<script lang="ts" src="./pokecard.ts"></script>

<style module lang="scss" src="./pokecard.module.scss"></style>