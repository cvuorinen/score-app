<template>
  <div>
    <h3 contenteditable="true" spellcheck="false">AWAY</h3>
    <Score :value="store.score.away" @increment="increment" @decrement="decrement" />
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";
import Score from "./Score.vue";

const store = useScoreStore();

function increment() {
  store.incrementAway();
}

function decrement() {
  store.decrementAway();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys();
whenever(keys.ArrowUp, increment);
whenever(keys.ArrowDown, decrement);
</script>
