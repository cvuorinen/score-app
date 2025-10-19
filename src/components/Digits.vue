<template>
  <span class="lcd">{{ formattedValue }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: number;
}>();

const formattedValue = computed(() => {
  if (!Number.isInteger(props.value)) {
    return "";
  }

  if (props.value < 10) {
    return "0" + props.value.toFixed();
  }

  return props.value.toFixed();
});
</script>
