<template>
    <ion-toolbar>
    <ion-segment>
      <ion-segment-button value="all" checked @click="info()">
        Company info
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="manageJob()">
        Manage jobs
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="newJob()">
        Add job
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>
<script>
export default {
    methods:{
        info(){
            this.$router.push('/yourCompany')
        },
        manageJob(){
            this.$router.push('/yourCompany/editJob')
        },
        newJob(){
            this.$router.push('/yourCompany/newJob')
        }
    }
}
</script>
<style scoped>
</style>