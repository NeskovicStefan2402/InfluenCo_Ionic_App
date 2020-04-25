<template>
    <ion-toolbar>
    <ion-segment>
      <ion-segment-button value="all" checked @click="active()">
        Active jobs
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="history()">
        History
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>
<script>
import eventBus from '../../../main'
export default {
    methods:{
        active(){
            eventBus.$emit('subheader_company','active')
        },
        history(){
            eventBus.$emit('subheader_company','history')
        }
    }
}
</script>