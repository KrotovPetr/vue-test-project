<template>
  <top-header/>
  <router-view></router-view>

</template>

<script>
import TopHeader from './components/Header/TopHeader';
export default {
  components: {
    TopHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400&family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
</style>