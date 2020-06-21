<template>
    <div class='signup'>
        <div class='ion-item'>
            <ion-input placeholder="Name*" :value="$store.state.company.name"
          @ionInput="$store.state.company.name = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-textarea placeholder="Description" :value="$store.state.company.description" @ionInput="$store.state.company.description = $event.target.value"></ion-textarea>
        </div>
        <div class='ion-item'>
            <ion-input placeholder="Identification number*" :value="$store.state.company.id" @ionInput="$store.state.company.id = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-input placeholder="Site link" :value="$store.state.company.site" @ionInput="$store.state.company.site = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-input type='password' placeholder="Password*" :value="$store.state.company.password" @ionInput="$store.state.company.password = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-input type='password' placeholder="Confirm password*" :value="$store.state.company.confirm_password" @ionInput="$store.state.company.confirm_password = $event.target.value"></ion-input>
        </div>
        <br>
        <div class='ion-item'>
            <ion-checkbox color="primary" @ionChange="selektuj"></ion-checkbox>
            <ion-label class="text">I'm not bot!</ion-label>
        </div>
        <br><br>
        <ion-row align='center'>
            <ion-col>
                <ion-button @click="cancel()" color='danger'> Reset </ion-button>
            </ion-col>
            <ion-col>
                <ion-button @click="send()" color='success'> Sign up</ion-button>
            </ion-col>
        </ion-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ele:{
                checked:false
            }
        }
    },
    created(){
        this.cancel();
    },
    methods:{
        selektuj(){
            this.ele.checked=!this.ele.checked;
        },
        cancel(){
            this.$store.state.company.name=''
            this.$store.state.company.description=''
            this.$store.state.company.id=''
            this.$store.state.company.site=''
            this.$store.state.company.password=''
            this.$store.state.company.confirm_password=''
        },
        send(){
            if(this.$store.state.company.name!='' && this.$store.state.company.id!='' && this.$store.state.company.password!='' && this.$store.state.company.confirm_password!=''){
                if(this.ele.checked==true){    
                    if(this.$store.state.company.password==this.$store.state.company.confirm_password && this.$store.state.company.password!=''){
                        this.$store.dispatch('signUpCompany')
                        .then(success=>{
                            console.log('Successfully created company!')
                            alert('Successfully created company!')
                            this.cancel()
                        })
                        .catch(error=>{
                            alert('Error:'+error)
                        })
                    }else{
                        alert('Input correct confirm password!')
                    }
                }else{
                    alert('First select bot box!')
                }
        }else{
            alert('Input required fields!')
        }
    }
    }
}
</script>
<style scoped>
.text{
    margin-left: 20px;
}
.linkovi{
    border-color: #f2b620;
	background-color: #f2b620;
	color: black; 
}
</style>