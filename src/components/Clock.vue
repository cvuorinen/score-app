<template>
  <div class="clock lcd" @click="toggle">
    <Digits v-bind:value="this.$store.getters.minutes" />:<Digits v-bind:value="this.$store.getters.seconds" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Store } from 'vuex';
import { State } from '../store';
import Digits from './Digits.vue';

@Component({
  components: { Digits },
})
export default class Clock extends Vue {
  $store!: Store<State>;

  toggle () {
    this.$store.dispatch('toggleClock')
  }
}
</script>

<style scoped>
.clock {
  border: 2px solid white;
  padding: .1em;
  font-size: 0.18em;
  color: red;
}
</style>
