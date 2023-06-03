<template>
  <h2>Какой-то покемон: {{link}}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, Store } from 'vuex';

export default defineComponent({
  name: "PokemonPage",
  data(){
    return {
      link1: ""
    }
  },
  methods: {
    async fetchCurrentPokemonData(){
      return null;
    }
  },
  setup() {
    const store: Store<any> = useStore();
    
    // Получите одно состояние из хранилища
    const link = store.state.moduleMain.pokemonLink;

    return {
      link
    };
  },

  mounted() {
    console.log(this.link);
  }


})
</script>

<style scoped>

</style>