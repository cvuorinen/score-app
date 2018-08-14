<template>
  <div class="score" @click="increment">
    <Digits v-bind:value="this.$store.state.score.away" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Digits from './Digits.vue';

@Component({
  components: { Digits },
})
export default class AwayScore extends Vue {
  increment () {
    this.$store.commit('incrementAway')
  }
}
</script>

<style scoped>
.score {
  font-size: 60px;
  color: orange;
}
</style>
