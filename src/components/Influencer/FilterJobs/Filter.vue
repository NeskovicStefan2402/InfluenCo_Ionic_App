<template>
  <ion-row>
    <ion-col >
      <ion-searchbar
        show-cancel-button="never"
        :value="$store.state.filterJob"
        @input="$store.state.filterJob=$event.target.value"
        @ionClear="$store.state.filterJob=''"
      ></ion-searchbar>
    </ion-col>
    <!-- <ion-col size="4">
          <select id='types' @change="onChange($event)">
              <option value="-1">All types</option>
              <option v-for="i in $store.state.types" :value="i.id">{{i.name}}</option>
          </select>
    </ion-col> -->
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
        // this.$store.dispatch('getCompanyTypes')
        // this.postSelected()

    },
    methods:{        
        onChange(event){
            // this.$store.state.typeData = event.target.value
            // console.log(this.type)
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