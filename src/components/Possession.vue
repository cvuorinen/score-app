<template>
  <div class="possession clickable"
       v-bind:class="{
         active: this.active,
         home: this.direction === 'home',
         away: this.direction === 'away',
       }"
       @click="onClick">
  </div>
</template>

<script lang="ts">
import { VNode } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator';
import Digits from './Digits.vue';

@Component({
  props: { direction: String }
})
export default class Possession extends Vue {
  direction!: string;

  get active () {
    return this.$store.state.possession === this.direction;
  }

  onClick () {
    this.$emit('toggle')
  }
}
</script>

<style scoped>
.possession {
  width: 0;
  height: 0;
  border-style: solid;
  opacity: .3;
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
