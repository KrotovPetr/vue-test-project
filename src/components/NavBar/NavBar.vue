<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <button @click="$router.push('/posts')">Посты</button>
      <button style="margin-left: 20px" >О сайте</button>
      <button style="margin-left: 20px">store</button>
      <button style="margin-left: 20px" >Composition</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>