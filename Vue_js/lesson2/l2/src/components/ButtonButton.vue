<template>
    <button @click="clicked">{{ caption }}</button>
</template>

<script lang = "ts">
import { defineComponent,defineEmits } from 'vue';





defineEmits(['clicked'])

export default defineComponent({
   props: [
    'caption'
   ],
   events: [
    'clicked'
   ],
    setup(props,ctx) {

            let clicked = () => {
                ctx.emit('clicked')
            }
            return {
                clicked
            }
    },
})
