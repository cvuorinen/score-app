<template>
  <div>
    <div class="fouls-container">
      <h5 contenteditable="true" spellcheck="false">FOULS</h5>

      <Fouls :value="store.fouls.away" @increment="store.incrementAwayFouls" @decrement="store.decrementAwayFouls" />

      <div class="bonus-container">
        <Bonus :value="store.fouls.away" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "../store";
import Fouls from "./Fouls.vue";
import Bonus from "./Bonus.vue";

const store = useScoreStore();
</script>

<style scoped>
.fouls-container {
  width: 0.4em;
  margin: 0 auto;
  position: relative;
}

.bonus-container {
  position: absolute;
  bottom: 0.06em;
  right: 0;
}
</style>
