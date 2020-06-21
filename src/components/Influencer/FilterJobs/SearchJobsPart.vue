<template>
    <div id='jobs'>
        <FilterJob/>
        <Jobs/>
    </div>
</template>
<script>
import FilterJob from './Filter'
import Jobs from './LisOfJobs'
export default {
    components:{
        FilterJob,
        Jobs
    }
}
</script>
<style scoped>
div{
    background-color: #f2b620;
}
ion-item{
    background-color: #f2b620;
}
</style>