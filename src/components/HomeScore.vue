<template>
  <div>
    <h3 contenteditable="true" spellcheck="false">{{ store.settings.homeTeam }}</h3>
    <Score :value="store.score.home" @increment="increment" @decrement="decrement" />
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { useScoreStore } from "../store";
import { useIsInputFocused } from "../composables/useKeyboardShortcuts";
import Score from "./Score.vue";

const store = useScoreStore();
const isInputFocused = useIsInputFocused();

function increment() {
  store.incrementHome();
}

function decrement() {
  store.decrementHome();
}

// VueUse keyboard shortcuts
const keys = useMagicKeys();
whenever(keys["1"], () => !isInputFocused() && increment());
whenever(keys["§"], () => !isInputFocused() && decrement());
</script>
