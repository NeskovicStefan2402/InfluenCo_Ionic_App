<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="Email" :value="email"></ion-input>
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
            email:'',
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
            this.email=''
            this.password=''
        }
    }
}
</script>