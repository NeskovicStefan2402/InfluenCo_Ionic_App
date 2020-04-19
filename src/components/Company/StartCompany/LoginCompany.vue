<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="Name" :value="company.name" @input="company.name = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Password" :value="company.password" @input="company.password = $event.target.value"></ion-input>
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
            company:{
                name:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            this.$store.dispatch('loginCompany',this.company)
            .then(success=>{
                console.log('Uspesno logovanje!')
                this.$router.push('/info')
            })
            .catch(error=>{
                console.log(error)
            })
        },
        reset(){
            this.company.name=''
            this.company.password=''
        }
    }
}
</script>