<template>
  <div>
    <div class="fouls-container">
      <h5 contenteditable="true" spellcheck="false">
        FOULS
      </h5>

      <Fouls :value="this.$store.state.fouls.home"
            @increment="increment"
            @decrement="decrement" />

      <div class="bonus-container">
        <Bonus :value="this.$store.state.fouls.home" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Fouls from './Fouls.vue';
import Bonus from './Bonus.vue';

@Component({
  components: { Fouls, Bonus },
})
export default class HomeFouls extends Vue {
  increment () {
    this.$store.commit('incrementHomeFouls')
  }
  decrement () {
    this.$store.commit('decrementHomeFouls')
  }
}
</script>

<style scoped>
.fouls-container {
  width: 0.4em;
  margin: 0 auto;
  position: relative;
}
.bonus-container {
  position: absolute;
  bottom: 0.02em;
  left: 0;
}
</style>
