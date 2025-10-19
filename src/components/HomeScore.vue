<template>
  <div>
    <h3 contenteditable="true" spellcheck="false">HOME</h3>
    <Score :value="store.score.home" @increment="increment" @decrement="decrement" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useScoreStore } from "../store";
import Score from "./Score.vue";

const store = useScoreStore();

function increment() {
  store.incrementHome();
}

function decrement() {
  store.decrementHome();
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "1") {
    increment();
  } else if (event.key === "§") {
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
