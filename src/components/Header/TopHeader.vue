<template>
  <header :class="$style.header">
    <img :src="imageSrc" alt="logo" :class="$style.logo" @click="toHomeView($router)">
  </header>
</template>

<script lang="ts" src="./header.ts"></script>
<style module src="./header.module.scss" lang="scss"></style>