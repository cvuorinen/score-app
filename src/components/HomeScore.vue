<template>
  <div>
    <h3 contenteditable="true">KOTI</h3>
    <Score :value="this.$store.state.score.home" @increment="increment" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Score from './Score.vue';

@Component({
  components: { Score },
})
export default class HomeScore extends Vue {
  increment () {
    this.$store.commit('incrementHome')
  }
}
</script>
