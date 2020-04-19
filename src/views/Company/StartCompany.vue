<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <ion-item class="ion-text-center">
                    <h3>Top 5 popular inluencers:</h3>
                </ion-item>
                <Gallery />
                <InfluencersPart/>
                <!-- <JobsPart/> --> 
                <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro culpa dignissimos sed nobis labore ex maxime esse, eaque veniam deleniti amet impedit quam temporibus. Magnam in molestias necessitatibus iste, id corporis, saepe nostrum libero perspiciatis, fugit aut quibusdam beatae est aliquid placeat laboriosam iure atque! Sequi saepe ut amet accusantium. -->
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Menu from '../../components/Company/Menu/LeftMenu'
import Gallery from '../../components/Company/Gallery/HomeGallery'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import eventBus from '../../main'
import InfluencersPart from '../../components/Company/FilterInfluencer/ListOfInfluencers.vue'
export default {
    components:{
        Menu,
        HeaderIn,
        Gallery,
        InfluencersPart
    },
    data(){
        return{
            open:false
        }
    },
    mounted() {
        eventBus.$on("nav", ele => {
            this.open = ele;
        });
    },
}
</script>
<style scoped>
h3{
    text-align: center;
}
.naslov{
    text-align: center;
}
</style>