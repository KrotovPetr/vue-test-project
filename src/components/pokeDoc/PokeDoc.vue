<template>
    <div :class="$style.pokeDoc" >
      <h1>{{data.name}}</h1>
      <div :class="$style.charact">
        <p :class="$style.pText">Color: {{data.color.name}}</p>
        <p :class="$style.pText">Baby: {{data["is_baby"]}}</p>
        <p :class="$style.pText">Mythical: {{data["is_mythical"]}}</p>
        <p :class="$style.pText">Legendary: {{data["is_legendary"]}}</p>
        <p :class="$style.pText">Gender rate: {{data["gender_rate"]}}</p>
        <p :class="$style.pText">Shape: {{data.shape.name}}</p>
        <p :class="$style.pText">Habitat: {{data.habitat.name}}</p>
        <h3 :class="$style.subHeader">Другие имена</h3>
        <div :class="$style.namesContainer">
          <div :class="$style.charactHeader">
            <div :class="$style.header">Язык</div>
            <div :class="$style.header">Ссылка</div>
            <div :class="$style.header">Имя</div>
          </div>
          <div v-for="name in data.names" :key="generateUuid(name)" :class="$style.nameData">
            <div :class="$style.header">{{name.language.name}}</div>
            <div :class="$style.header">{{name.language.url}}</div>
            <div :class="$style.header">{{name.name}}</div>
          </div>

        </div>

      </div>
    </div>
</template>

<script lang="ts" src="./pokeDoc.ts"></script>

<style lang="scss" src="./pokeDoc.module.scss" module></style>