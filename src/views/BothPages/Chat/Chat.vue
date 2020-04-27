<template>
    <ion-page>
        <HeaderInbox/>
        <ChatBody/>
        <ChatFooter />
    </ion-page>
</template>
<script>
import HeaderInbox from '../../../components/Chat/HeaderInbox'
import ChatFooter from '../../../components/Chat/ChatFooter'
import ChatBody from '../../../components/Chat/ChatBody'
export default {
   components:{
       HeaderInbox,
       ChatBody,
       ChatFooter
   },
//    created(){
//        setInterval(() => {
//            this.$store.dispatch('getMessages',this.$route.params.id)
//        }, 5000);
//    } 
}
</script>
<style scoped>
.foo{
    bottom: 0px;
    position: fixed;
}
</style>