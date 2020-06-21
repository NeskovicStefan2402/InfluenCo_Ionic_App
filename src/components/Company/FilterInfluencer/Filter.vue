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
              <option v-for="i in $store.state.interests" :value="i.id">{{i.name}}</option>
          </select>
    </ion-col>
  </ion-row>
</template>
<script>
import eventBus from '../../../main'
export default {
    data(){
        return{
            type:''
        }
    },
    created(){
        this.$store.dispatch('getInterests')
    },
    methods:{
        
        onChange(event){
            this.$store.state.typeData = event.target.value
            eventBus.$emit('changeInterests')
        }
    }
}
</script>
<style>
select{
    width: 100%;
    height: 90%;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #2734476d;
}
option{
  color: white;
}
</style>