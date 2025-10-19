<template>
  <div class="edit-toggle">
    <Checkbox @change="store.toggleEditable" :value="store.editable">
      Edit
    </Checkbox>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "../store";
import Checkbox from "./Checkbox.vue";

const store = useScoreStore();
</script>

<style scoped>
.edit-toggle {
  padding: 1em;
  padding-bottom: 0;
  font-size: 0.04em;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
}
</style>
