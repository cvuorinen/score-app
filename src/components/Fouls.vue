<template>
  <div class="fouls lcd clickable"
       v-bind:class="{ bonus: this.bonus }"
       @click="onClick($event)">
    {{ value }}
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
export default class Fouls extends Vue {
  value!: number;

  get bonus () {
    return this.value >= 5;
  }

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
.fouls {
  font-size: 0.1em;
  color: orange;
}
.fouls.bonus {
  color: red;
}
</style>
