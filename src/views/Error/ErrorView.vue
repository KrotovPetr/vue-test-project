<template>
  <div :class="$style.mainContainer">
    <img :src="imagePath" :alt="pokeball" :class="$style.pokeImg" @click="toHome($router)">
    <h1 :class="$style.errorHeader">404</h1>
    <p :class="$style.pText">Нет такой страницы</p>
    <p :class="$style.pText">Нажмите на покебол, чтобы вернуться на главную</p>
  </div>
</template>

<script lang="ts" src="./errorView.ts"></script>
<style module src="./errorView.module.scss" lang="scss"></style>
