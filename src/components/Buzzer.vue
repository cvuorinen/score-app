<template>
  <div>
    <div class="buzzer clickable" @click="play">&#128266;</div>
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";
import { useIsInputFocused } from "../composables/useKeyboardShortcuts";

const store = useScoreStore();
const isInputFocused = useIsInputFocused();

function play() {
  store.playBuzzer();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if ((e.ctrlKey && e.key === "b") && !isInputFocused()) {
      e.preventDefault();
    }
  },
});

whenever(keys["Ctrl+B"], () => !isInputFocused() && play());
</script>

<style scoped>
.buzzer {
  width: 2em;
  margin: 0 auto;
  font-size: 0.05em;
  color: white;
  padding: 0.5em 0.3em;
  border: max(0.05em, 2px) solid rgba(255, 255, 255, 0.8);
  border-radius: 0.1em;
}
</style>
