<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <FilterCompany/>
                <ListOfCompanies />
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Menu from '../../components/Influencer/Menu/LeftMenu'
import FilterCompany from '../../components/Influencer/FilterCompany/Filter'
import ListOfCompanies from '../../components/Influencer/FilterCompany/ListOfCompanies'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import eventBus from '../../main'
export default {
    components:{
        FilterCompany,
        ListOfCompanies,
        HeaderIn,
        Menu
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
ion-page{
    background-color: rgb(208, 213, 213);
}
</style>