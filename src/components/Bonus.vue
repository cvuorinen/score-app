<template>
  <div class="bonus"
       v-bind:class="{ active: this.active }">
  </div>
</template>

<script lang="ts">
import { VNode } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: { value: Number }
})
export default class Bonus extends Vue {
  value!: number;

  get active () {
    return this.value >= 5;
  }
}
</script>

<style scoped>
.bonus {
  width: 0.08em;
  height: 0.08em;
  border-radius: 50%;
  background-color: red;
  opacity: .2;
}
.bonus.active {
  opacity: 1;
  box-shadow: 0 0 0.05em 0.003em red;
}
</style>
