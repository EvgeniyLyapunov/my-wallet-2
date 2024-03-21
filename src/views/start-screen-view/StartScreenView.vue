<script setup lang="ts">
import '@/assets/style/base/base.css'
import { defineComponent } from 'vue'

defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  path: '/'
})
</script>

<template>
  <div class="content">
    <div class="main-title-block">
      <h1 class="main-title">My Wallet 2.0</h1>
      <span class="under-title">by little wing studio</span>
    </div>
    <div class="menu-main">
      <router-link :to="{ name: 'wallet' }" class="menu-link">
        <span class="link-item">Wallet</span>
      </router-link>

      <router-link :to="{ name: 'current-state' }" class="menu-link">
        <span class="link-item">Current State</span>
      </router-link>

      <router-link :to="{ name: 'operation-log' }" class="menu-link">
        <span class="link-item">Operation Log</span>
      </router-link>
    </div>
    <div class="main-footer-block">
      <span class="copy">Copyright &copy;</span>
      <span class="logo"></span>
    </div>
  </div>
</template>

<style scoped lang="css">
@import './start-screen-view.css';
</style>
