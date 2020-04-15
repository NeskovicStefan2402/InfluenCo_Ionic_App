<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="Name" :value="name"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Password" :value="password"></ion-input>
        </ion-item>
        <ion-row>
            <ion-col>
                <ion-button color='danger' @click="reset()"> Reset</ion-button>
            </ion-col>
            <ion-col>
                <ion-button color='success' @click="login()"> Login</ion-button>
            </ion-col>
        </ion-row>
    </ion-content>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            password:''
        }
    },
    methods:{
        login(){
            if(this.$store.state.info){
                localStorage.setItem('info',true)
                this.$router.push('/info')
            }else{
                this.$router.push('/home')
            }
        },
        reset(){
            this.name=''
            this.password=''
        }
    }
}
</script>