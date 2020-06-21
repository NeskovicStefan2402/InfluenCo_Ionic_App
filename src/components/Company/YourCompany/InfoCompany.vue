<template>
    <ion-card>
        <ion-card-content>
            <ion-row>
                <ion-col size='5'>
                    <img :src="image">
                </ion-col>
                <ion-col size='1'></ion-col>
                <ion-col>
                    <h2><b>{{$store.state.company.name}}</b></h2>    
                    <br>  
                    <h3>{{$store.state.company.idNumber}}</h3>  
                </ion-col>
            </ion-row>
            <ion-row>
                {{$store.state.company.desription}}
            </ion-row>
            <ion-row>
                {{typeName}}
            </ion-row>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    computed:{
        image(){
            return 'http://10.1.2.197:8000/uploads/'+this.$store.state.company.logo
        },
        typeName(){
            var type=this.$store.state.types.filter(ele=>ele.id == this.$store.state.company.type)
            return type.name
        }
    }
}
</script>
<style scoped>
ion-card{
    background-color: rgba(255, 255, 255, 0.68);
}
img{
    height: 90px;
    width: 100%;
}
h2{
    color: black;
}
</style>