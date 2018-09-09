<template>
  <div class="clock"
    v-bind:class="{ active: this.$store.state.clock.running }">
    <div class="lcd clickable"
       v-shortkey="{ toggle1: ['space'], toggle2: ['enter'] }"
       @shortkey="toggle"
       @click="toggle">
      <Digits v-bind:value="this.$store.getters.minutes"
      /><span class="dots"
        v-bind:class="{ blink: this.$store.state.clock.running }"
      >:</span><Digits v-bind:value="this.$store.getters.seconds" />
    </div>
    <div class="buttons">
      <button class="button"
        @click="increment">
        +
      </button>
      <button class="button"
        @click="decrement">
        -
      </button>
    </div>
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

  increment () {
    this.$store.dispatch('incrementClock')
  }

  decrement () {
    this.$store.dispatch('decrementClock')
  }
}
</script>

<style scoped>
.clock {
  border: .03em solid rgba(255, 255, 255, .8);
  border-radius: 0.06em;
  padding: .2em .1em .1em .1em;
  font-size: 0.18em;
  color: red;
}
.clock.active {
  border-color: rgba(255, 0, 0, .8);
}
.clock .dots {
  color: rgba(255, 255, 255, .8);
}
.clock.active .dots {
  color: red;
}
.clock .buttons {
  font-size: 0.3em;
  line-height: 0.5em;
}
.clock button.button {
  margin: 0 10%;
  width: 30%;
}
</style>
