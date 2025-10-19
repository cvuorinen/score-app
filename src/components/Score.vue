<template>
  <div>
    <div class="score clickable" @click="onClick($event)">
      <Digits :value="value" />
    </div>
    <button class="button" @click="emit('decrement')">-</button>
  </div>
</template>

<script setup lang="ts">
import Digits from "./Digits.vue";

defineProps<{
  value: number;
}>();

const emit = defineEmits<{
  increment: [];
  decrement: [];
}>();

function onClick(event: MouseEvent) {
  if (event.ctrlKey) {
    emit("decrement");
  } else {
    emit("increment");
  }
}
</script>

<style scoped>
.score {
  font-size: 0.3em;
  color: orange;
}

button.button {
  display: block;
  width: 5em;
  margin: -0.3em auto 0;
  padding: 0.3em 0;
  font-size: 0.06em;
}
</style>
