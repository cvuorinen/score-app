<template>
  <div class="clock" :class="{ active: store.clock.running }">
    <div class="lcd clickable" @click="toggle">
      <Digits :value="store.minutes" /><span class="dots" :class="{ blink: store.clock.running }">:</span>
      <Digits :value="store.seconds" />
    </div>
    <div class="buttons">
      <button class="button" @click="increment">+</button>
      <button class="button" @click="decrement">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";
import Digits from "./Digits.vue";

const store = useScoreStore();

function toggle() {
  store.toggleClock();
}

function increment() {
  store.incrementClock();
}

function decrement() {
  store.decrementClock();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
    }
  },
});

whenever(keys.space, toggle);
whenever(keys.enter, toggle);
</script>

<style scoped>
.clock {
  border: 0.03em solid rgba(255, 255, 255, 0.8);
  border-radius: 0.06em;
  padding: 0.2em 0.1em 0.1em 0.1em;
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
  font-size: 0.3em;
  line-height: 0.5em;
}

.clock button.button {
  margin: 0 10%;
  width: 30%;
}
</style>
