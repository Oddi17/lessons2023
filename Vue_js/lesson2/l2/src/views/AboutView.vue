<template>
  <div class="about">
    <h1 @click="clicked">This is an about page</h1>
    <span> Message: {{ `я есть грут number ${mynumx1}` }}</span>
    <span> Message: {{ `я есть грут2x number ${mynumx2}` }}</span>
    <span> Message: {{ `я есть грут3x number ${mynumx3}` }}</span>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  // elslint
  name: 'AboutView',
  data: () => {
    return {
      mynum: Math.floor(Math.random()*1000)
    }
  },
  methods: {
    newmynum() {
      this.mynum = Math.floor(Math.random()*1000)
    },
    clicked() {
      this.newmynum()
    }
  },
  computed: {
    mynumx1() {
      return this.mynum*1
    },
    mynumx2() {
      return this.mynum*2
    },
    mynumx3() {
      return this.mynum*3
    }

  },
  watch: {
    mynum(newVal,oldVal) {
      console.log('newVal')
      console.log(newVal)

      console.log('oldVal')
      console.log(oldVal)

      console.log('this.mynumx1')
      console.log(this.mynumx1)

      console.log('this.mynumx2')
      console.log(this.mynumx2)

      console.log('this.mynumx3')
      console.log(this.mynumx3)
      
    }  
  },

  created() {
    console.log('about created')
  },
  mounted() {
    console.log('about mounted')
  }
});
</script>
