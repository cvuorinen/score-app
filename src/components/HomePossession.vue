<template>
  <Possession direction="home" @toggle="toggle" />
</template>

<script setup lang="ts">
import { useScoreStore, Possessions } from "../store";
import Possession from "./Possession.vue";

const store = useScoreStore();

function toggle() {
  const newPossession =
    store.possession === Possessions.Home ? Possessions.None : Possessions.Home;

  store.setPossession(newPossession);
}
</script>
