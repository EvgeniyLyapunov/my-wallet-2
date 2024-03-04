<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'current-state',
  path: '/current-state'
})
</script>

<template>
  <div class="content">
    <h1>Current State</h1>
  </div>
</template>

<style scoped>
.content {
  padding: 0 15px;
  margin: 0 auto;
}
</style>
