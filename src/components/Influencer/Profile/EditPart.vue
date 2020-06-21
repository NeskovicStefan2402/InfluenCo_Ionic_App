<template>
    <div>
        <ion-button @click="edit=true" v-if="edit==false">Edit</ion-button>
        <EditCard v-if='edit==true'/>
        
    </div>
</template>
<script>
import eventBus from '../../../main'
import EditCard from './EditCard'
export default {
    components:{
        EditCard
    },
    data(){
    return{
            edit:false
        }
    },
    mounted(){
        eventBus.$on('apply',ele=>{
            this.edit=false
        })
    }
}
</script>
<style scoped>
ion-button{
    margin:10px;
}
</style>
