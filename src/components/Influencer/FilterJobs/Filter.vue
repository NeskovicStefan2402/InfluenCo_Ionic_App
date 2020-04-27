<template>
  <ion-row class="filt">
    <ion-col >
      <ion-searchbar
        show-cancel-button="never"
        :value="$store.state.filterJob"
        @input="$store.state.filterJob=$event.target.value"
        @ionClear="$store.state.filterJob=''"
      ></ion-searchbar>
    </ion-col>
  </ion-row>
</template>
<style scoped>
.filt{
    background-color: rgb(206, 219, 220);
}
</style>