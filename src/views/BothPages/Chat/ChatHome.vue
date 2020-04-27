<template>
    <ion-page>
            <ListOfChats/>
            <ion-button color="success" class="addButton" @click="$router.push('/newChat')">+</ion-button>
    </ion-page>
</template>
<script>
import HeaderChat from '../../../components/Chat/HeaderChat'
import ListOfChats from '../../../components/Chat/ListOfChats'
export default {
    components:{
        ListOfChats,
        HeaderChat
    }
}
</script>
<style scoped>
div{
    margin-top:40px ;
}
.addButton{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    right: 20px;
    bottom: 20px;
    font-size: 20px;
    position: fixed;
}
</style>