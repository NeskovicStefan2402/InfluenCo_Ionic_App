<template>
    <ion-item @click="openChat">
        <ion-row>
            <ion-col size='3'>
                <img :src="image" class="logo">
            </ion-col>
            <ion-col class="name" size='6'>
                {{ chat.name}}
            </ion-col>
            <ion-col size='2'>
                <ion-label class="notification" v-if="chat.seen==false"></ion-label>
            </ion-col>
            <ion-col size='1' class="pointer">
                <i class='fas fa-angle-right' style='font-size:18px;'></i>
            </ion-col>
        </ion-row>
    </ion-item>
</template>
<script>
export default {
    props:['chat'],
    computed:{
        image(){
            return 'http://10.1.2.197:8000/uploads/'+this.chat.image
        }
    },
    methods:{
        openChat(){
            this.$router.push('/inbox/'+this.chat.id_chat)
        }
    }
}
</script>
<style scoped>
ion-row{
    width: 100%;
    margin-top:30px;
}
.logo{
    height: 50px;
    width: 120px;
}
.pointer{
    width: 100%;
}
.notification{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: red;
}
.name{
    text-align: center;
    width:100%;
}
</style>