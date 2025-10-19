<template>
  <div class="period">
    <h5 contenteditable="true" spellcheck="false">PERIOD</h5>
    <div class="lcd clickable" @click="onClick($event)">
      {{ store.period }}
    </div>
    <button class="button" @click="decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useScoreStore } from "../store";

const store = useScoreStore();

function onClick(event: MouseEvent) {
  if (event.ctrlKey) {
    decrement();
  } else {
    increment();
  }
}

function increment() {
  store.incrementPeriod();
}

function decrement() {
  store.decrementPeriod();
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "PageUp") {
    increment();
  } else if (event.key === "PageDown") {
    decrement();
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.period .lcd {
  font-size: 0.1em;
  color: greenyellow;
}

button.button {
  display: block;
  width: 2.5em;
  margin: 0.2em auto;
}
</style>
