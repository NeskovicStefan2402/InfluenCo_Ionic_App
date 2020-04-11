<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-row>
                <ion-col size='3'>
                    <ion-icon name="arrow-back" @click="$router.push('/welcome/signUp')"></ion-icon>  
                </ion-col>
                <ion-col>
                    Select your interests!        
                </ion-col>
            </ion-row>
            
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-item v-for="i,index in $store.state.types" @click="selectItem(i)">
            <ion-col>
                {{i.name}}
            </ion-col>
            <ion-col size='2'>
                <i id='polje' v-if="$store.state.interest.name==i.name" class="fa fa-check"></i>
            </ion-col>
        </ion-item>
    </ion-content>
</ion-page>
    
</template>
<script>
import eventBus from '../main'
export default {
    methods:{
        selectItem(i){
            this.$store.state.interest=i
            this.$router.push('/welcome/signUp')
        }
    }
}

</script>
<style scoped>
</style>