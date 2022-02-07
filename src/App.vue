<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
<style scoped>
html,
body {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
