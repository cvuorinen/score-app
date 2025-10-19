<template>
  <div>
    <div class="fouls lcd clickable" :class="{ bonus }" @click="onClick($event)">
      {{ value }}
    </div>
    <button class="button" @click="emit('decrement')">-</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: number;
}>();

const emit = defineEmits<{
  increment: [];
  decrement: [];
}>();

const bonus = computed(() => props.value >= 5);

function onClick(event: MouseEvent) {
  if (event.ctrlKey) {
    emit("decrement");
  } else {
    emit("increment");
  }
}
</script>

<style scoped>
.fouls {
  font-size: 0.1em;
  color: orange;
}

.fouls.bonus {
  color: red;
}

button.button {
  display: block;
  width: 2.5em;
  margin: 0.2em auto;
}
</style>
