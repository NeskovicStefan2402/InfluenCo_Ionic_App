<template>
    <div id='jobs'>
                <ion-item>
                    <h3>Search for jobs!</h3>
                </ion-item>
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
#jobs{
    background-color: rgb(206, 219, 220);
}
</style>