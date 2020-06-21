<template>
    <div>
        <ChatCard v-for="i in $store.state.chats" :chat='i'/>
    </div>
</template>
<script>
import ChatCard from './ChatCard'
export default {
    components:{
        ChatCard
    },
    created(){
        this.$store.dispatch('getChats')
        .then(success=>{
        })
    }
}
</script>
<style scoped>
</style>