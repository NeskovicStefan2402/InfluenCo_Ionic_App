<template>
  <ion-row>
    <ion-col size="8">
      <ion-searchbar
        show-cancel-button="never"
        :value="$store.state.filterData"
        @input="$store.state.filterData=$event.target.value"
        @ionClear="$store.state.filterData=''"
      ></ion-searchbar>
    </ion-col>
    <ion-col size="4">
          <select id='types' @change="onChange($event)">
              <option value="-1">All types</option>
              <option v-for="i in $store.state.types" :value="i.id">{{i.name}}</option>
          </select>
    </ion-col>
  </ion-row>
</template>
<script>
export default {
    data(){
        return{
            type:''
        }
    },
    created(){
      this.$store.state.typeData=-1
      this.$store.state.filterData=''
        this.$store.dispatch('getCompanyTypes')
        // this.postSelected()

    },
    methods:{
        
        onChange(event){
            this.$store.state.typeData = event.target.value
            
        }
    }
}
</script>
<style>
select{
    width: 100%;
    height: 90%;
    border-radius: 10px;
    border: none;
    color: rgb(255, 255, 255);
    background-color: #3880ff;
}
</style>