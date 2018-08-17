<template>
  <div class="period" @click="increment">
    <h5 contenteditable="true">ERÄ</h5>
    <div class="lcd">{{ this.$store.state.period }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Digits from './Digits.vue';

@Component({
  components: { Digits },
})
export default class Period extends Vue {
  increment () {
    this.$store.commit('incrementPeriod')
  }
}
</script>

<style scoped>
.period .lcd {
  font-size: 0.1em;
  color: greenyellow;
}
</style>
