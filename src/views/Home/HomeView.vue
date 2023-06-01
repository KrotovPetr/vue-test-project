<template>
        <div v-for="pokemon in pokemonData" :key="pokemon.id">
          <div @click="$router.push(`/pokemon/${pokemon.name}`)">{{pokemon.url}}</div>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      pokemonData: []
    }
  },
  methods: {

    async fetchPokemons() {
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',

        };
        //@ts-ignore
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=100", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
        console.log(result.results)
        this.pokemonData = result.results.map((pokemon: any)=>{
          return {id: Date.now(), ...pokemon}
        });

      } catch (e) {
        alert('Ошибка')
      } finally {
        console.log('finally')
      }
    }
  },
  mounted() {
    this.fetchPokemons();
  },

})
</script>

<style scoped>

</style>