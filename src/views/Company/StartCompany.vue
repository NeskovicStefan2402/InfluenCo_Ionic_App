<template>
    <ion-page>
        <div class='strana'>
        <HeaderIn/>
        <ion-content  id='nesto' >
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <ion-item class="ion-text-center">
                    <h3>Top 5 popular influencers:</h3>
                </ion-item>
                <Gallery />
                <InfluencersPart/>
            </div>
        </ion-content>
        </div>
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
.strana{
    height:100%;
    background-color: #1a222e;
}
div{
    /* background-color: #f2b620; */
    background-color: #1a222e;

    height: 100%;
    width: 100%;
}
</style>