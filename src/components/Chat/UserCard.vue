<template>
    <ion-item v-if="!exist" @click="openChat">
        <ion-row>
            <ion-col size='3'>
                <img :src="image" class="logo">
            </ion-col>
            <ion-col class="name" size='8'>
                {{ name}}
            </ion-col>
            <ion-col size='1' class="pointer">
                <i class='fas fa-angle-right' style='font-size:18px;'></i>
            </ion-col>
        </ion-row>
    </ion-item>
</template>
<script>
export default {
    props:['user'],
    computed:{
        image(){
            return JSON.parse(localStorage.getItem('influencer'))==null ? 'http://10.1.2.197:8000/uploads/'+this.user.image : 'http://10.1.2.197:8000/uploads/'+this.user.logo
        },
        name(){
            return JSON.parse(localStorage.getItem('influencer'))==null ? this.user.first_name+' '+this.user.last_name : this.user.name
        },
        exist(){
            var ele = false
            this.$store.state.chats.forEach(element => {
                if(element.id == this.user.id){
                    ele=true
                }
            });
            return ele
        }
    },
    
    methods:{
        openChat(){
            var chat={
                id_chat : -1,
                image : this.image,
                name: this.name
            }
            chat['id']=this.user.id 
            this.$store.state.chats.push(chat)
            this.$store.state.messages=[]
            this.$router.push('/inbox/'+chat.id_chat)
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