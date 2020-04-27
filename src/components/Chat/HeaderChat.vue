<template>
    <ion-toolbar color ='success'>
        <ion-row>
            <ion-col size='1' class="headerChat" @click="home">
                 <i class='fas fa-angle-left' style='font-size:18px'></i>
            </ion-col>
            <ion-col class="headerChat">
                Inbox
            </ion-col>
            <ion-col size='1' class="headerChat" @click="refresh">
                 <i class='fas fa-refresh' style='font-size:18px'></i>
            </ion-col>
        </ion-row>
    </ion-toolbar>
</template>
<script>
export default {
    methods:{
        home(){
            this.$router.push('/')
        },
        refresh(){
            this.$store.dispatch('getChats')
        }
    }
}
</script>
<style scoped>
.headerChat{
    text-align: center;
}
</style>