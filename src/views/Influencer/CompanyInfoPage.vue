<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <Info :company='com'/>
                <h3>Active jobs from this company: </h3>
                <Gallery :company='com'/>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Menu from '../../components/Influencer/Menu/LeftMenu'
import Info from '../../components/Influencer/CompanyInfo/InfoCard'
import Gallery from '../../components/Influencer/CompanyInfo/CompanyActiveJobs'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import eventBus from '../../main'
export default {
    components:{
        Menu,
        HeaderIn,
        Info,
        Gallery
    },
    data(){
        return{
            open:false,
            id:''
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    computed:{
        com(){
            var obj={}
            this.$store.state.companies.forEach(element => {
                if(element.id==parseInt(this.$route.params.id)){
                    obj=element
                }
            });
            
            return obj
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
</style>