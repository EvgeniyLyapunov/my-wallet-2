<script setup lang="ts">
type TProp = {
  isConfirmStep: boolean
}

defineProps<TProp>()
</script>
<template>
  <form class="form">
    <div class="fields-block">
      <v-text-field
        label="Name Of A New Card"></v-text-field>
      <v-select 
        label="Select Type Of Money"></v-select>
      <v-select 
        label="Select A Base Card"></v-select>
    </div>
    <div class="btns-block">
      <v-btn class="cancel-btn">Cancel</v-btn>
      <v-btn class="clear-btn">Clear</v-btn>
      <v-btn class="next-btn">Next</v-btn>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
}

.fields-block {
  justify-self: center;
}

.btns-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}

.v-btn {
  text-transform: unset;
}

.next-btn {
  background-color: #26A69A;
}

.clear-btn {
  outline-offset: -4px;
  outline: 2px solid #26A69A;
}

.cancel-btn {
  outline-offset: -4px;
  outline: 2px solid var(--base-view-title-color);
}
</style>
