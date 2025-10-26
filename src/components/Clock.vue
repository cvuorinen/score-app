<template>
  <div class="clock" :class="{ active: store.clock.running }">
    <div class="lcd clickable" @click="toggle">
      <Digits :value="store.minutes" /><span class="dots" :class="{ blink: store.clock.running }">:</span>
      <Digits :value="store.seconds" />
    </div>
    <div class="buttons">
      <button class="button" @click="increment">+</button>
      <button class="button button-reset" @click="reset">🔁</button>
      <button class="button" @click="decrement">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";
import { useIsInputFocused } from "../composables/useKeyboardShortcuts";
import Digits from "./Digits.vue";

const store = useScoreStore();
const isInputFocused = useIsInputFocused();

function toggle() {
  store.toggleClock();
}

function increment() {
  store.incrementClock();
}

function decrement() {
  store.decrementClock();
}

function reset() {
  store.resetClock();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if ((e.key === " " || e.key === "Enter" || (e.ctrlKey && e.key === "r"))
      && !isInputFocused()) {
      e.preventDefault();
    }
  },
});

whenever(keys.space, () => !isInputFocused() && toggle());
whenever(keys.enter, () => !isInputFocused() && toggle());
whenever(keys["Ctrl+R"], () => !isInputFocused() && reset());
</script>

<style scoped>
.clock {
  border: max(0.03em, 2px) solid rgba(255, 255, 255, 0.8);
  border-radius: 0.06em;
  padding: 0.2em 0.1em 0.05em 0.1em;
  font-size: 0.18em;
  color: red;
}

.clock.active {
  border-color: rgba(255, 0, 0, 0.8);
}

.clock .dots {
  color: rgba(255, 255, 255, 0.8);
}

.clock.active .dots {
  color: red;
}

.clock .buttons {
  font-size: 0.25em;
  display: flex;
  justify-content: center;
  gap: 0.3em;
}

.clock button.button {
  width: 4em;
  font-size: 1em;
  line-height: 0.7em;
}

.clock button.button-reset {
  border: none;
  font-size: 0.8em;
}
</style>
