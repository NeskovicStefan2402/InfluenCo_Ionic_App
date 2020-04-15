<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <Welcome/>
    </ion-slide>
    <ion-slide>
      <About/>
    </ion-slide>
    <ion-slide>
      <Last/>
    </ion-slide>
  </ion-slides>
</template>
<script>
import About from '../../components/Slides/AboutSlide'
import Welcome from '../../components/Slides/WelcomeSlide'
import Last from '../../components/Slides/LastSlide'
export default {
    components:{
        About,
        Welcome,
        Last
    },
    data(){
        return{
            slideOpts:{
                // initSlide : 1,
                speed : 400
            }
        }
    }
}
</script>