<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import StartScreenView from '@/views/start-screen-view/StartScreenView.vue'
import { defineComponent } from 'vue'

// import '@/assets/style/base/base.css'

defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  // components: {
  //   StartScreenView
  // }
})
</script>

<style scoped></style>
