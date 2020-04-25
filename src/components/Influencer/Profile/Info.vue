<template>
  <ion-row class="naslov">
    <ion-col size="3">
      <img :src="image" class="image_class" />
    </ion-col>
    <ion-col class="followers">
      <ion-row>
        <ion-col size="4" class="defaultText">
          <b>Full name:</b>
        </ion-col>
        <ion-col>{{$store.state.influencer.first_name}} {{$store.state.influencer.last_name}}</ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="4" class="defaultText">
          <b>Age:</b>
        </ion-col>
        <ion-col>{{$store.state.influencer.age}}</ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="4" class="defaultText">
          <b>Interest:</b>
        </ion-col>
        <ion-col>{{interest_name}}</ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
</template>
<script>
export default {
  computed: {
    image() {
      return "http://192.168.0.11:8000/uploads/" + this.$store.state.influencer.image;
    },
    
    interest_name() {
      if (this.$store.state.types.length == 0) {
        this.$store.dispatch("getInterests").then(success => {
          return this.getName()
        });
      }else{
          return this.getName()
      }

      return null;
    }
  },
  methods:{
      getName(){
          var ele=null;
        this.$store.state.types.forEach(element => {
                if(element.id==this.$store.state.influencer.interest){
                    ele=element.name
                    }
            });
        return ele
    },
  }
};
</script>
<style scoped>
.naslov {
  padding-top: 30px;
}
.defaultText {
  font-size: 10px;
}
.followers {
  background-color: rgb(213, 208, 255);
  border-radius: 10px;
  margin: 5px;
  font-size: 10px;
  padding-top: 15px;
  /* text-align: center; */
  /* box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.367); */
  box-shadow: 10px 10px 94px -7px rgba(0, 0, 0, 0.39);
}
.image_class {
  border-radius: 50%;
}
</style>