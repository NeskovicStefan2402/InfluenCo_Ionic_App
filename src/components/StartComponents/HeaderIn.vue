<template>
    <ion-header>
        <ion-toolbar>
                    <ion-row>
                        <ion-col>
                            <a @click="openNav()" style="font-size:30px;cursor:pointer; color:black;">&#9776;</a>
                        </ion-col>
                        <ion-col>
                            <img src="../../assets/influencer.png" @click="$router.push('/home')">
                        </ion-col>
                        <ion-col></ion-col>
                    </ion-row>
        </ion-toolbar>        
    </ion-header>
</template>
<script>
import eventBus from '../../main'
export default {
    data(){
        return{
            open:false
        }
    },
    methods:{
        openNav(){
            this.$store.state.open_menu=!this.$store.state.open_menu
            
        }
    }
}
</script>
<style scoped>
img{
    text-align: center;
    height: 50px;
}
</style>