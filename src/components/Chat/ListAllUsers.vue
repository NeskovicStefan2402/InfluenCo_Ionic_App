<template>
        <div v-if="!influencerLogged">
            <ChatCard v-for="i in $store.state.influencers" :user='i'/>
        </div>
        <div v-else>
            <ChatCard v-for="i in $store.state.companies" :user='i'/>
        </div>
    
</template>
<script>
import ChatCard from './UserCard'
export default {
    components:{
        ChatCard
    },
    created(){
        this.influencerLogged == true ? this.$store.dispatch('getCompanies') : this.$store.dispatch('getInfluencers')
    },
    computed:{
        influencerLogged(){
            return JSON.parse(localStorage.getItem('influencer'))!=null ? true : false
        }
    }
}
</script>
<style scoped>
</style>