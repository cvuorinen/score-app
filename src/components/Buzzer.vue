<template>
  <div>
    <div class="buzzer clickable" @click="play">&#128266;</div>
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";

const store = useScoreStore();

function play() {
  store.playBuzzer();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === "b") {
      e.preventDefault();
    }
  },
});

whenever(keys["Ctrl+B"], play);
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
