<template>
  <div v-shortkey="keyMap"
       @shortkey="keyAction">
    <h3 contenteditable="true" spellcheck="false">
      AWAY
    </h3>
    <Score :value="this.$store.state.score.away"
           @increment="increment"
           @decrement="decrement" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Score from './Score.vue';

@Component({
  components: { Score },
})
export default class AwayScore extends Vue {
  increment () {
    this.$store.commit('incrementAway')
  }
  decrement () {
    this.$store.commit('decrementAway')
  }

  keyMap = { increment: ['arrowup'], decrement: ['arrowdown'] }
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
