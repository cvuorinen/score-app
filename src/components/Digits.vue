<template>
  <span class="lcd">{{ formattedValue }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    value: Number,
  }
})
export default class Digits extends Vue {
  @Prop() private value!: number;

  get formattedValue(): string {
    if (!Number.isInteger(this.value)) {
      return '';
    }

    if (this.value < 10) {
      return '0' + this.value.toFixed();
    }

    return this.value.toFixed();
  }
}
</script>
