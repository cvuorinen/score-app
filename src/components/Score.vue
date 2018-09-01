<template>
  <div>
    <div class="score clickable"
        @click="onClick($event)">
      <Digits v-bind:value="value" />
    </div>
    <button class="button"
      @click="$emit('decrement')">
      -
    </button>
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
button.button {
  display: block;
  width: 5em;
  margin: 0.2em auto;
}
</style>
