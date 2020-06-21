<template>
    <div class="login">
        <div class='ion-item'>
                <ion-input placeholder="Name" :value="company.name" @input="company.name = $event.target.value" class="polje"></ion-input>
        </div>
        <div class='ion-item'>
                <ion-input type='password' placeholder="Password" :value="company.password" @input="company.password = $event.target.value" class="polje"></ion-input>
            
        </div>
        <br>
        <ion-row align='center'>
            <ion-col>
                <ion-button color='danger' @click="reset()"> Reset</ion-button>
            </ion-col>
            <ion-col>
                <ion-button color='success' @click="login()"> Login</ion-button>
            </ion-col>
        </ion-row>
    </div>
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
                this.$router.push('/info')
            })
            .catch(error=>{
                alert('Incorrect login!');
            })
        },
        reset(){
            this.company.name=''
            this.company.password=''
        }
    }
}
</script>
<style scoped>
ion-content{
    background-color: #f2b620;
}

.polje{
    background-color: #f2b620;
}
div{
    background-color: #f2b620;
}
</style>
