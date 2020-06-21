<template>
    <ion-card>
        <ion-card-header>
            <ion-row>
                <ion-col size='8'>
                    <h4><b>{{company.name}}</b></h4>
                </ion-col>
                <ion-col size='4'>
                    <img :src="image">
                </ion-col>
            </ion-row>
        </ion-card-header>
        <ion-card-content>
            {{company.desription.slice(0,100)}} ...
        </ion-card-content>
        <ion-card-footer>
            <ion-row>
                <ion-col size='9'></ion-col>
                <ion-col size='3'>
                    <ion-button @click="companyInfo" color='secondary'> > </ion-button>
                </ion-col>
            </ion-row>
        </ion-card-footer>
    </ion-card>
</template>
<script>
export default {
    props:['company'],
    computed:{
        image() {
            return "http://10.1.2.197:8000/uploads/" + this.company.logo;
        }
    },
    methods:{
        companyInfo(){
            this.$router.push('companies/'+this.company.id)
        }
    }
}
</script>
<style scoped>
ion-card{
    background-color: rgba(253, 250, 149, 0.374);
    color: black;
}
h4{
    color: black;
}
img{
    height: 40px;
    width: 80px;
}

</style>