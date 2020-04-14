<template>
    <div >
            <div v-if="$store.state.typeData==-1">
                <CompanyCard  v-for="i in $store.state.companies.filter(ele=> ele.name.toLowerCase().includes($store.state.filterData.toLowerCase()))" :company='i'/>
            </div>
            <div v-else>
                <CompanyCard  v-for="i in $store.state.companies.filter(ele=> ele.type == $store.state.typeData ).filter(ele=> ele.name.toLowerCase().includes($store.state.filterData.toLowerCase()))" :company='i'/>
            </div>
    </div>
</template>
<script>
import CompanyCard from './CompanyCard'
export default {
    components:{
        CompanyCard
    },
    data(){
        return{
            open:false
        }
    },
    computed:{
        filterObjects(){
            var lista=[]
            lista=this.$store.state.companies.filter(ele=> ele.type == this.$store.state.typeData )
            console.log(lista)
            lista=lista.filter(ele=> ele.name.toLowerCase().includes(this.$store.state.filterData.toLowerCase()))
            console.log(lista)
            return lista
        }
    },
    created(){
        console.log(this.$store.state.companies)
        this.$store.dispatch('getCompanies')        
    },
}
</script>