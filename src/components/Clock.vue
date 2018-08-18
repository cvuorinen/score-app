<template>
  <div class="clock lcd"
       v-bind:class="{ active: this.$store.state.clock.running }"
       v-shortkey="{ toggle1: ['space'], toggle2: ['enter'] }"
       @shortkey="toggle()"
       @click="toggle">
    <Digits v-bind:value="this.$store.getters.minutes"
    />:<Digits v-bind:value="this.$store.getters.seconds" />
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
  border: .03em solid #aaa;
  border-radius: 0.06em;
  padding: .1em;
  font-size: 0.18em;
  color: red;
}
.clock.active {
  border-color: #a00;
}
</style>
