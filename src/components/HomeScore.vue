<template>
  <div>
    <h3 contenteditable="true" spellcheck="false">HOME</h3>
    <Score :value="store.score.home" @increment="increment" @decrement="decrement" />
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";
import Score from "./Score.vue";

const store = useScoreStore();

function increment() {
  store.incrementHome();
}

function decrement() {
  store.decrementHome();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys();
whenever(keys["1"], increment);
whenever(keys["§"], decrement);
</script>
