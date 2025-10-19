<template>
  <div>
    <div class="buzzer clickable" @click="play">&#128266;</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useScoreStore } from "../store";

const store = useScoreStore();

function play() {
  store.playBuzzer();
}

function handleKeydown(event: KeyboardEvent) {
  if (event.ctrlKey && event.key === "b") {
    event.preventDefault();
    play();
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
.buzzer {
  width: 1em;
  margin: 0 auto;
  font-size: 0.04em;
  color: white;
  padding: 0.1em 0.3em;
  border: 0.05em solid rgba(255, 255, 255, 0.8);
  border-radius: 0.1em;
}
</style>
