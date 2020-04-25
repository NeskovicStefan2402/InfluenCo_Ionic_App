<template>
    <ion-toolbar>
    <ion-segment>
      <ion-segment-button value="all" checked @click="stats()">
        Stats
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="interests()">
        Intersts
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>
<script>
import eventBus from '../../../main'
export default {
    methods:{
        interests(){
            eventBus.$emit('subheader_profile','interests')
        },
        stats(){
            eventBus.$emit('subheader_profile','stats')
        }
    }
}
</script>