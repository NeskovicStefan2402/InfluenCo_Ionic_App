<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true && postojiInfluencer'/>
                <MenuCompany v-if='$store.state.open_menu==true && postojiCompany'/>
            <div v-else>
                <FilterCompany/>
                <ListOfCompanies />
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Menu from '../../components/Influencer/Menu/LeftMenu'
import MenuCompany from '../../components/Company/Menu/LeftMenu'
import FilterCompany from '../../components/Influencer/FilterCompany/Filter'
import ListOfCompanies from '../../components/Influencer/FilterCompany/ListOfCompanies'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import eventBus from '../../main'
export default {
    components:{
        FilterCompany,
        ListOfCompanies,
        HeaderIn,
        Menu,
        MenuCompany
    },
    data(){
        return{
            open:false
        }
    },
    computed:{
        postojiInfluencer(){
            return JSON.parse(localStorage.getItem('influencer'))!=null
        },
        postojiCompany(){
            return JSON.parse(localStorage.getItem('company'))!=null
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
    background-color: rgb(19, 49, 49);
}
</style>