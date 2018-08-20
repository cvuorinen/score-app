<template>
  <Possession :direction="'home'"
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
export default class HomePossession extends Vue {
  $store!: Store<State>;

  toggle () {
    const newPossession = this.$store.state.possession === Possessions.Home
      ? Possessions.None : Possessions.Home;

    this.$store.commit('setPossession', newPossession)
  }
}
</script>
