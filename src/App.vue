<template>
  <div>
    <top-header/>
    <router-view/>
  </div>

</template>

<script>
import TopHeader from './components/Header/TopHeader';
export default {
  components: {
    TopHeader
  }
}
</script>

<style></style>
