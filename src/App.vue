<template>
  <div id="app">
    <ion-app class="pozadina">
      <ion-vue-router />
    </ion-app>
    <router-view></router-view>
    <router-view name='header-welcome'></router-view>
  </div>
</template>
<style scoped>

</style>
