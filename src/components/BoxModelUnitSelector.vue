<template>
  <div ref="container"
       class="units-dropdown">
    <span ref="label"
          class="units-dropdown__selected-item"
          @click.top="toggleDropdown">
      <span>{{ selectedUnit }}</span>

      <SvgIcon class="units-dropdown__icon"
               type="mdi"
               width="12"
               height="20"
               viewBox="8 0 8 22"
               :path="dropdownOpenIcon">
      </SvgIcon>
    </span>

    <div ref="dropdown"
         class="vbme-units-dropdown__content">
      <div v-for="unit in availableUnits"
           class="vbme-units-dropdown__content__item"
           :key="unit"
           @click="() => { updateValue(unit) }">{{ unit }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { mdiMenuDown } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';
import { BoxModelEditorStyleOptions } from '../models/box-model-editor-style-options';

export default defineComponent({
  components: { SvgIcon },
  props: {
    availableUnits: Array<string>,
    backgroundColor: String as PropType<string>,
    textColor: String as PropType<string>,
    fontSize: Number as PropType<number>,
    value: {
      type: String as PropType<string>,
      required: true
    }
  },
  computed: {
    styles() {
      const defaultStyles = new BoxModelEditorStyleOptions();
      return {
        '--background-color': this.backgroundColor ?? defaultStyles.unitDropdownBackgroundColor,
        '--text-color': this.textColor ?? defaultStyles.unitDropdownTextColor,
        '--hover-background-color': defaultStyles.unitDropdownHoverBackgroundColor,
        '--hover-text-color': defaultStyles.unitDropdownHoverTextColor,
        '--font-size': `${this.fontSize ?? defaultStyles.unitDropdownFontSize}px`,
      }
    }
  },
  watch: {
    value(newValue: string) {
      this.selectedUnit = newValue;
    }
  },
  mounted() {
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      const container = this.$refs.container as HTMLDivElement;
      const dropdown = this.$refs.dropdown as HTMLDivElement;

      if (!container.contains(target)) {
        dropdown.style.display = 'none';
      }
    });

    const dropdown = this.$refs.dropdown as HTMLDivElement;
    Object.keys(this.styles).forEach(prop => dropdown.style.setProperty(prop, this.styles[prop]));

    document.body.appendChild(dropdown);
  },
  data() {
    return {
      selectedUnit: this.value,
      dropdownOpenIcon: mdiMenuDown
    };
  },
  methods: {
    toggleDropdown() {
      const dropdown = this.$refs.dropdown as HTMLDivElement;
      const label = this.$refs.label as HTMLSpanElement;

      const isVisible = dropdown.style.display !== 'none';

      if (isVisible) {
        dropdown.style.display = 'none';
        return;
      }

      // Set correct position for dropdown
      const labelBounds = label.getBoundingClientRect();
      const dropdownBounds = dropdown.getBoundingClientRect();
      dropdown.style.top = `${labelBounds.top + labelBounds.height}px`;
      dropdown.style.left = `${labelBounds.left + labelBounds.width - dropdownBounds.width}px`;

      dropdown.style.display = 'block';
    },
    updateValue(selectedUnit: string) {
      this.selectedUnit = selectedUnit;
      (this.$refs.dropdown as HTMLDivElement).style.display = 'none';
      this.$emit(`update:value`, this.selectedUnit);
    }
  }
});
</script>

<style lang="scss">
:root {
  .vbme-units-dropdown__content {
    display: none;
    position: absolute;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: var(--font-size);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    text-align: right;
    border-radius: 3px;
    z-index: 10;
  }

  .vbme-units-dropdown__content__item {
    padding: 2px 10px;
    cursor: pointer;

    &:hover {
      background-color: var(--hover-background-color);
      color: var(--hover-text-color);
    }
    
    &:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
}

.units-dropdown {
  display: inline-block;
  font-size: 12px;
  padding-bottom: 2px;
  cursor: pointer;

  &:hover .units-dropdown__content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .units-dropdown__selected-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
  }
}
</style>