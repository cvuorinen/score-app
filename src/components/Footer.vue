<template>
  <div class="footer">

    <EditToggle />

    <Settings />

    <h2>
      Score
      <span class="icon">
        <font-awesome-icon icon="basketball-ball"></font-awesome-icon>
      </span>
      App
    </h2>

    <Help />

    <MadeBy />
  </div>
</template>

<script setup lang="ts">
import EditToggle from "./EditToggle.vue";
import MadeBy from "./MadeBy.vue";
import Settings from "./Settings.vue";
import Help from "./Help.vue";
</script>

<style scoped>
.footer {
  padding: 0.02em;
  padding-bottom: 0;
  font-size: 0.033em;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;

  &>* {
    flex: 1;
  }
}

.footer h2 {
  font-size: 1.5em;
  font-weight: 100;
  font-variant: small-caps;
}

.footer .icon {
  color: #e3732e;
}
</style>
