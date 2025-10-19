<template>
  <label class="checkbox clickable" @click="emit('change')">
    <svg v-if="!value" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
    <svg v-if="value" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  value: boolean;
}>();

const emit = defineEmits<{
  change: [];
}>();
</script>

<style scoped>
.checkbox {
  display: inline-block;
}

.checkbox svg {
  width: 1.2em;
  height: 1.2em;
  fill: white;
  vertical-align: text-bottom;
}
</style>
