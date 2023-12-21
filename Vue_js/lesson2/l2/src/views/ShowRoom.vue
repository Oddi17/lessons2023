<template>
  <ButtonButton caption="caption"/>
  <!-- <div class="about">
  <ButtonButton : caption="caption", @click='buttonClicked'/>
  </div> -->
</template>


<script lang="ts">

import { defineComponent,ref } from 'vue';
import ButtonButton from '@/components/ButtonButton.vue'; // @ is an alias to /src

export default defineComponent({
  // elslint
  name: 'ShowRoom',
  components: {
    ButtonButton,
  },
  props: [
    'msg'
  ],
  data: () => {
    let caption = ref('Brave')
    let buttonClicked = () => {
      caption.value= ''
    }
    return {
      caption,
      buttonClicked
    }
  },
  methods: {
  },
  computed: {

  },
  watch: {

  },

  created() {
    //
  },
  mounted() {
    //
  }
});
</script>
