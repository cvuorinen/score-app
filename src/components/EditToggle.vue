<template>
  <div class="edit-toggle">
    <div>
      <Checkbox @change="store.toggleEditable" :value="store.editable">
        Edit
      </Checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "../store";
import Checkbox from "./Checkbox.vue";

const store = useScoreStore();
</script>
