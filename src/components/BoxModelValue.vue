<template>
  <span v-if="!isEditing"
        class="value-label"
        @click.stop="beginEdit">
    {{ value ?? '-' }}
  </span>

  <input v-else
         ref="inputValue"
         type="number"
         :value="editValue"
         @change="onValueChange"
         @blur="endEdit" />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    editing: Boolean as PropType<boolean>,
    value: Number as PropType<number>,
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
      value = +value;

      if (!value || isNaN(value)) {
        value = null;
      }

      return value;
    }
  }
});
</script>

<style lang="scss">
$input-font-size: 11px;

.value-label {
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
  font-size: $input-font-size;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
}
</style>