<template>
  <div>
    <h3 contenteditable="true">VIERAS</h3>
    <Score :value="this.$store.state.score.away" @increment="increment" />
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
}
</script>
