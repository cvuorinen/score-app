<template>
  <Possession :direction="direction" @toggle="toggle" />
</template>

<script setup lang="ts">
import { useScoreStore, Possessions } from "../store";
import Possession from "./Possession.vue";

const store = useScoreStore();
const direction = Possessions.Away;

function toggle() {
  const newPossession =
    store.possession === Possessions.Away ? Possessions.None : Possessions.Away;

  store.setPossession(newPossession);
}
</script>
