<template>
  <div>
    <h3 contenteditable="true" spellcheck="false">AWAY</h3>
    <Score :value="store.score.away" @increment="increment" @decrement="decrement" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useScoreStore } from "../store";
import Score from "./Score.vue";

const store = useScoreStore();

function increment() {
  store.incrementAway();
}

function decrement() {
  store.decrementAway();
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "ArrowUp") {
    increment();
  } else if (event.key === "ArrowDown") {
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
