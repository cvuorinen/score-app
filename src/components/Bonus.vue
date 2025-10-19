<template>
  <div class="bonus" :class="{ active }"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: number;
}>();

const active = computed(() => props.value >= 5);
</script>

<style scoped>
.bonus {
  width: 0.08em;
  height: 0.08em;
  border-radius: 50%;
  background-color: red;
  opacity: 0.2;
}

.bonus.active {
  opacity: 1;
  box-shadow: 0 0 0.05em 0.003em red;
}
</style>
