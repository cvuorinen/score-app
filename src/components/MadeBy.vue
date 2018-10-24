<template>
  <div class="made-by">
    <p>
      Made with
      <a target="_blank" rel="noopener" href="https://github.com/cvuorinen/score-app">
        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
      </a>
      by <a target="_blank" rel="noopener" href="https://github.com/cvuorinen">@cvuorinen</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MadeBy extends Vue {}
</script>

<style scoped>
.made-by {
  padding: 0.04em;
  padding-bottom: 0;
  color: rgba(255, 255, 255, 0.4);
}
.made-by p {
  margin: 0;
  font-size: 0.02em;
  line-height: 3.5em;
}
.made-by a {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
}
</style>
