<template>
  <div class="possession clickable" :class="{
    active,
    home: direction === 'home',
    away: direction === 'away',
  }" @click="emit('toggle')"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useScoreStore } from "../store";

const props = defineProps<{
  direction: string;
}>();

const emit = defineEmits<{
  toggle: [];
}>();

const store = useScoreStore();

const active = computed(() => store.possession === props.direction);
</script>

<style scoped>
.possession {
  width: 0;
  height: 0;
  border-style: solid;
  opacity: 0.3;
}

.possession.active {
  opacity: 1;
}

.possession.home {
  border-width: 0.03em 0.2em 0.03em 0;
  border-color: transparent red transparent transparent;
}

.possession.away {
  border-width: 0.03em 0 0.03em 0.2em;
  border-color: transparent transparent transparent red;
}
</style>
