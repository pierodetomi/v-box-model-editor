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
         class="units-dropdown__content">
      <div v-for="unit in availableUnits"
           :key="unit"
           @click="() => { updateValue(unit) }">{{ unit }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { mdiMenuDown } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';

export default defineComponent({
  components: { SvgIcon },
  props: {
    availableUnits: Array<string>,
    value: {
      type: String as PropType<string>,
      required: true
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
    dropdown.style.display = 'none';
    dropdown.style.position = 'absolute';
    dropdown.style.backgroundColor = '#f9f9f9';
    dropdown.style.boxShadow = '0px 8px 16px 0px rgba(0, 0, 0, 0.2)';
    dropdown.style.padding = '5px 10px';
    dropdown.style.fontSize = '12px';
    dropdown.style.textAlign = 'right';
    dropdown.style.zIndex = '10';

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

  // .units-dropdown__content {
  //   display: none;
  //   position: absolute;
  //   right: 0;
  //   background-color: #f9f9f9;
  //   width: 40px;
  //   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  //   padding: 5px 10px;
  //   z-index: 10;
  // }
}
</style>