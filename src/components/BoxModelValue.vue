<template>
  <div :style="styles">
    <span v-if="!isEditing"
          class="value-label"
          @click.stop="beginEdit">
      {{ value ?? '-' }}
    </span>
  
    <input v-else
           ref="inputValue"
           :value="editValue"
           @keyup.enter="event => { onValueChange(event); endEdit(); }"
           @change="onValueChange"
           @blur="endEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { InputHelper } from '../helpers/input.helper';

export default defineComponent({
  props: {
    editing: Boolean as PropType<boolean>,
    value: Number as PropType<number>,
    fontSize: Number as PropType<number>
  },
  computed: {
    styles() {
      return {
        '--font-size': `${this.fontSize ?? 11}px`
      };
    }
  },
  data() {
    return {
      isEditing: this.editing,
      editValue: this.value,
    };
  },
  methods: {
    beginEdit() {
      this.isEditing = true;

      this.$nextTick(() => {
        (this.$refs.inputValue as HTMLInputElement).focus();
      });
    },
    endEdit() {
      this.isEditing = false;
    },
    onValueChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.editValue = this.getNormalizedValue(target.value);
      this.$emit('update:value', this.editValue);
    },
    getNormalizedValue(value: any) {
      return InputHelper.getNormalizedValue(value);
    }
  }
});
</script>

<style lang="scss">
.value-label {
  font-size: var(--font-size);
  cursor: pointer;
}

input {
  border: none;
  outline: none;
  width: 30px;
  min-width: 30px;
  text-align: right;
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  font-size: var(--font-size);

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
}
</style>