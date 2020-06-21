<template>
    <ion-card v-if="$store.state.instagram.followers!=0">
        <ion-card-header>
            <ion-row>
                <ion-col>
                    <h5>Instagram stats</h5>
                </ion-col>
                <ion-col size='2'>
                    <img src="../../../assets/instagram.jpg" class="icon">
                </ion-col>
            </ion-row> 
        </ion-card-header>
        <ion-card-content>
            <ion-row>   
                <ion-col size='8'>
                    <p>Instagram description:</p> 
                </ion-col>
                <ion-col>
                    <p>{{$store.state.instagram.description}}</p>
                </ion-col>
            </ion-row>
            <ion-row>   
                <ion-col size='8'>
                    <p>Instagram  followers:</p> 
                </ion-col>
                <ion-col>
                    {{$store.state.instagram.followers}}
                </ion-col>
            </ion-row>
            <ion-row>   
                <ion-col size='8'>
                    <p>Instagram  following:</p> 
                </ion-col>
                <ion-col>
                    {{$store.state.instagram.following}}
                </ion-col>
            </ion-row>
            <!-- <ion-input type='file' @change="onFileSeleceted($event)"></ion-input>
            <ion-button @click="upload()" >Send</ion-button> -->
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    data(){
        return{
            file_name:null
        }
    },
    destroyed(){
        this.$store.state.instagram={
                        followers:0,
                        following:0,
                        description:''
                    }
    },  
    created(){
         this.$store.dispatch('getInstagramStats')
                .then(success=>{
                    
                })
                .catch(error=>{
                    this.$store.state.instagram={
                        followers:0,
                        following:0,
                        desccription:''
                    }
                })
    }
}
</script>
<style scoped>
ion-card{
    background-color: white;
}
.icon{
     height:30px;
     width:30px;
}
p{
   font-size: 12px; 
}
</style>