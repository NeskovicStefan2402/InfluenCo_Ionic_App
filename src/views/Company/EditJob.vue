<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <JobInfo :job='job'/>
                <br>
                <ListInfluencers :job='job'/>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Menu from '../../components/Company/Menu/LeftMenu'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import ListInfluencers from '../../components/Company/EditJob/ListOfInterestedInfluencers'
import JobInfo from '../../components/Company/EditJob/InfoJob'
import eventBus from '../../main'
export default {
    components:{
        Menu,
        HeaderIn,
        JobInfo,
        ListInfluencers
    },
    created() {
        this.getJob(this.$route.params.id);
    },
    data(){
        return{
            open:false,
            job:''
        }
    },
    mounted() {
        eventBus.$on("nav", ele => {
            this.open = ele;
        });
    },
    methods:{  
        getJob(id){
            this.$store.state.jobs.forEach(element => {
                if(element.id==id){
                    this.job=element
                }
            });
        },
    }
}
</script>