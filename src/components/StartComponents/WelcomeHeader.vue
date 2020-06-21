<template>
    <ion-toolbar>
    <ion-segment>
      <ion-buttons slot="start">
          <ion-back-button default-href="#" @click="$router.push('/')"></ion-back-button>
      </ion-buttons>
      <ion-segment-button value="all" checked @click="login()">
        Login
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="signUp()">
        Sign up
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push('/welcome')
        },
        signUp(){
            this.$router.push('/welcome/signUp')
        }
    }
}
</script>