<template>
    <div id='messages1' v-if="influencerLogged">
        <Cloud id='msg' v-for="i in $store.state.messages" :message='i' :class="{'home':i.sendInfluencer,'away':i.sendCompany}"/>
    </div>
    <div id='messages2' v-else>
        <Cloud id='msg' v-for="i in $store.state.messages" :message='i' :class="{'away':i.sendInfluencer,'home':i.sendCompany}"/>
    </div>
</template>
<script>
import Cloud from './ChatCloud'
import eventBus from '../../main'
export default {
    components:{
        Cloud
    },
    created(){
        var id = this.$route.params.id
        this.$store.dispatch('getMessages',id)
    },
    computed:{
        influencerLogged(){
            return JSON.parse(localStorage.getItem('influencer'))!=null ? true : false
        }
    },
    mounted(){
        eventBus.$on('scroll',ele=>{
            console.log('Scroll...')
            // this.getLast()
        })
    },
}
</script>
<style scoped>
div{
    background-image: url('../../assets/messageBackground.jpg');
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    padding:10px;
    margin-bottom: 50px;
    overflow: hidden;
    overflow-y: scroll;
    height: calc(100vh - 20px);
    /* background-color: rgb(231, 205, 172); */
}
.home{
    margin-right: 0px;
    margin-top: 10px;
    color: black;
    background-color: rgba(174, 174, 255, 1);
}
.away{
    color: black;
    margin-left: 0px;
    margin-top: 10px;
}
</style>