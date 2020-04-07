<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
            <Menu/>
            <Gallery/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro culpa dignissimos sed nobis labore ex maxime esse, eaque veniam deleniti amet impedit quam temporibus. Magnam in molestias necessitatibus iste, id corporis, saepe nostrum libero perspiciatis, fugit aut quibusdam beatae est aliquid placeat laboriosam iure atque! Sequi saepe ut amet accusantium.
            
        </ion-content>
    </ion-page>
</template>
<script>
import Menu from '../components/Influencer/LeftMenu'
import Gallery from '../components/Influencer/Gallery/HomeGallery'
import HeaderIn from '../components/HeaderIn'
// import eventBus from '../main'
export default {
    components:{
        Menu,
        HeaderIn,
        Gallery
    },
    data(){
        return{
            open:false
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
</style>