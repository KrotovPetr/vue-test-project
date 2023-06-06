import { Module } from 'vuex';
import {TPokemon} from "@/utils/types/pokemonType";

interface ModuleState {
    currentPage: number,
    pokemonName: string,
    page: number,
    size: number,
    currentPokemonData: null | any,

}

const moduleMain: Module<ModuleState, any> = {
    namespaced: true,
    state: {
       currentPage: 1,
       pokemonName: "",
       page: 1,
       size: 10,
       currentPokemonData: null,
    },
    getters: {

    },
    mutations: {
        setPokemonData(state, data) {
            state.pokemonName = data.name;
        },
        clearPokemonData(state, data){
            state.pokemonName = "";
            state.currentPokemonData=null;
        },
        changeOptions(state, data){
            state.page = data.pageNumber;
            state.size = data.pageSize;
        },
        changePokemonData(state, data){
            state.currentPokemonData = data;
        }
    },
    actions: {
        setCurrentOptions({commit}, content){
            commit("changeOptions", content);
        },

        updatePokemonData({commit}, content){
            commit("setPokemonData", content);
        },

        fetchCurrentPokemonData: async ({commit},content) =>{
            const result: TPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${content}/`).then(data => data.json()).then(data => data);
            commit('changePokemonData', result);
        },

        clearPokemonData({commit}, content){
            commit('clearPokemonData')
        }
    },
};

export default moduleMain;