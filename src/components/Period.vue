<template>
  <div class="period" @click="increment">
    <span class="lcd">{{ this.$store.state.period }}</span>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.period {
  font-size: 30px;
  color: greenyellow;
}
</style>
