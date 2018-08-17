<template>
  <div class="score" @click="increment">
    <Digits v-bind:value="value" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Digits from './Digits.vue';

@Component({
  components: { Digits },
  props: { value: Number }
})
export default class Score extends Vue {
  increment () {
    this.$emit('increment')
  }
}
</script>

<style scoped>
.score {
  font-size: 0.3em;
  color: orange;
}
</style>
