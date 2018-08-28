<template>
  <div>
    <div class="buzzer clickable"
         v-shortkey="['ctrl', 'b']"
         @shortkey="play"
         @click="play">
        &#128266;
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Buzzer extends Vue {
  play () {
    this.$store.dispatch('playBuzzer')
  }
}
</script>

<style scoped>
.buzzer {
  width: 1em;
  margin: 0 auto;
  font-size: 0.04em;
  color: white;
  padding: 0.1em 0.3em;
  border: .05em solid rgba(255, 255, 255, .8);
  border-radius: 0.1em;
}
</style>
