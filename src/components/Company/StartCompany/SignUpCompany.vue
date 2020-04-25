<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="Name" :value="$store.state.company.name"
          @ionInput="$store.state.company.name = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-textarea placeholder="Description" :value="$store.state.company.description" @ionInput="$store.state.company.description = $event.target.value"></ion-textarea>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Identification number" :value="$store.state.company.id" @ionInput="$store.state.company.id = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Site link" :value="$store.state.company.site" @ionInput="$store.state.company.site = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Password" :value="$store.state.company.password" @ionInput="$store.state.company.password = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Confirm password" :value="$store.state.company.confirm_password" @ionInput="$store.state.company.confirm_password = $event.target.value"></ion-input>
        </ion-item>
        <ion-row>
            <ion-col>
                <ion-button @click="cancel()" color='danger'> Reset </ion-button>
            </ion-col>
            <ion-col>
                <ion-button @click="send()" color='success'> Sign up</ion-button>
            </ion-col>
        </ion-row>
    </ion-content>
</template>
<script>
export default {
    methods:{
        cancel(){
            this.$store.state.company.name=''
            this.$store.state.company.description=''
            this.$store.state.company.id=''
            this.$store.state.company.site=''
            this.$store.state.company.password=''
            this.$store.state.company.confirm_password=''
        },
        send(){
            this.$store.dispatch('signUpCompany')
            .then(success=>{
                alert('Successfully created company!')
                this.cancel()
            })
            .catch(error=>{
                alert('Error:'+error)
            })
            
        }
    }
}
</script>