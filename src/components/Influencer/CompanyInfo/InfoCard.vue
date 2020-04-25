<template>
    <ion-card>
        <ion-card-header>
            <ion-row>
                <ion-col>
                    <h3><b>{{company.name}}</b></h3>
                    <b>Type company: {{type}}</b>
                </ion-col>
                <ion-col>
                    <img :src="image">
                </ion-col>
            </ion-row>
        </ion-card-header>
        <ion-card-content>
            <ion-row>
                {{company.desription}}
            </ion-row>
            
        </ion-card-content>
    </ion-card>
</template>
<script>
export default{
    props:['company'],
    computed:{
        image() {
            return "http://192.168.0.11:8000/uploads/" + this.company.logo;
        },
        type(){
            var t=''
            this.$store.state.types.forEach(element => {
                if(element.id==this.company.type){
                    t=element.name
                }
            });
            return t
        }
    }
}
</script>
<style scoped>
img{
    height: 70px;
    width: 140px;
}
</style>