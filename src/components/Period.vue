<template>
  <div class="period"
       v-shortkey="keyMap"
       @shortkey="keyAction">
    <h5 contenteditable="true" spellcheck="false">
      PERIOD
    </h5>
    <div class="lcd clickable"
         @click="onClick($event)">
      {{ this.$store.state.period }}
    </div>
    <button class="button"
      @click="decrement">
      -
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Digits from './Digits.vue';

@Component({
  components: { Digits },
})
export default class Period extends Vue {
  onClick (event: MouseEvent) {
    if (event.ctrlKey) {
      this.decrement()
    } else {
      this.increment()
    }
  }

  increment () {
    this.$store.commit('incrementPeriod')
  }
  decrement () {
    this.$store.commit('decrementPeriod')
  }

  keyMap = { increment: ['pageup'], decrement: ['pagedown'] }
  keyAction (event: { srcKey: string }) {
    switch (event.srcKey) {
      case 'increment':
        return this.increment()
      case 'decrement':
        return this.decrement()
    }
  }
}
</script>

<style scoped>
.period .lcd {
  font-size: 0.1em;
  color: greenyellow;
}
button.button {
  display: block;
  width: 2.5em;
  margin: 0.2em auto;
}
</style>
