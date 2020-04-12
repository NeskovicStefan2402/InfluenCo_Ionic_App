<template>
    <div>
        <ion-button @click="edit=true" v-if="edit==false">Edit</ion-button>
        <EditCard v-if='edit==true'/>
        <Youtube/>   
        <Instagram/>
    </div>   
</template>
<script>
import eventBus from '../../../main'
import Youtube from './Youtube'
import Instagram from './Instagram'
import EditCard from './EditCard'
export default {
    components:{
        Youtube,
        Instagram,
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
