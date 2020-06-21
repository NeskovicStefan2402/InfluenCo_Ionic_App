<template>
  <div class="filt">
  <h3>Search for jobs!</h3>
  <ion-row>
    <ion-col >
      <ion-searchbar
        show-cancel-button="never"
        :value="$store.state.filterJob"
        @input="$store.state.filterJob=$event.target.value"
        @ionClear="$store.state.filterJob=''"
      ></ion-searchbar>
    </ion-col>
  </ion-row>
  
  </div>
</template>
<style scoped>
.filt{
    background-color: #f2b620;
}
h3{
  padding: 10px;
}
</style>