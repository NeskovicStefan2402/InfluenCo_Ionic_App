<template>
    <ion-row class="tab">
        <ion-col size='4'>
            <ion-button>Profile</ion-button>
        </ion-col>
        <ion-col size='4'>
            <ion-button >Home</ion-button>
        </ion-col>
        <ion-col size='4'>
            <ion-button>Messages</ion-button>
        </ion-col>
    </ion-row>
</template>
<script>
import About from '../Slides/AboutSlide'
import Welcome from '../Slides/WelcomeSlide'
import Last from '../Slides/LastSlide'
export default {
    components:{
        About,
        Welcome,
        Last
    },
  
};
</script>
<style scoped>
.tab{
    border: 1px black solid;
}
</style>