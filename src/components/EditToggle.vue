<template>
  <div class="edit-toggle">
    <Checkbox @change="toggle"
      :value="$store.state.editable">
      Edit
    </Checkbox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Checkbox from './Checkbox.vue';

@Component({
  components: { Checkbox }
})
export default class EditToggle extends Vue {
  toggle () {
    this.$store.commit('toggleEditable')
  }
}
</script>

<style scoped>
.edit-toggle {
  padding: 1em;
  padding-bottom: 0;
  font-size: 0.04em;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
}
</style>
