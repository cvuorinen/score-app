<template>
  <div class="edit-toggle">
    <Checkbox @change="store.toggleEditable" :value="store.editable">
      Edit
    </Checkbox>
    <Help />
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "../store";
import Checkbox from "./Checkbox.vue";
import Help from "./Help.vue";

const store = useScoreStore();
</script>

<style scoped>
.edit-toggle {
  padding: 0.5em 1em;
  padding-bottom: 0;
  font-size: 0.04em;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 3em;
}
</style>
