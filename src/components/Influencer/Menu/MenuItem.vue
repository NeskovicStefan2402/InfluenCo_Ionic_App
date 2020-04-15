<template>
    <ion-item color='dark' @click="open()">
            <ion-col size='11'>
                <h5>{{data.name}}</h5>
            </ion-col>
            <ion-col>
                <i class='fas fa-angle-right' style='font-size:18px'></i>
            </ion-col>
    </ion-item>
</template>
<script>
export default {
    props:[
        'data'
    ],
    methods:{
        open(){
            this.$store.state.open_menu=!this.$store.state.open_menu
            if(this.data.name=='Logout'){
                localStorage.setItem('influencer',null)
            }
            this.$router.push(this.data.path)
        }
    }
}
</script>