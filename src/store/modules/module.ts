import { Module } from 'vuex';

interface ModuleState {
    currentPage: number,
    pokemonLink: string,
}

const moduleMain: Module<ModuleState, any> = {
    namespaced: true,
    state: {
       currentPage: 1,
       pokemonLink: "emptyLink"
    },
    getters: {
        // Определите геттеры модуля 1
    },
    mutations: {
        // Определите мутации модуля 1
    },
    actions: {
        // Определите действия модуля 1
    },
};

export default moduleMain;