<template>
  <Possession :direction="direction"
              @toggle="toggle" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Store } from 'vuex';
import { State, Possessions } from '../store';
import Possession from './Possession.vue';

@Component({
  components: { Possession },
})
export default class AwayPossession extends Vue {
  $store!: Store<State>;
  direction = Possessions.Away

  toggle () {
    const newPossession = this.$store.state.possession === Possessions.Away
      ? Possessions.None : Possessions.Away;

    this.$store.commit('setPossession', newPossession)
  }
}
</script>
