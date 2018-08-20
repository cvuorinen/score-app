<template>
  <div class="score clickable"
       @click="onClick($event)">
    <Digits v-bind:value="value" />
  </div>
</template>

<script lang="ts">
import { VNode } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator';
import Digits from './Digits.vue';

@Component({
  components: { Digits },
  props: { value: Number }
})
export default class Score extends Vue {
  onClick (event: MouseEvent) {
    if (event.ctrlKey) {
      this.$emit('decrement')
    } else {
      this.$emit('increment')
    }
  }
}
</script>

<style scoped>
.score {
  font-size: 0.3em;
  color: orange;
}
</style>
