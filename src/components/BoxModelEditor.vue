<template>
  <div ref="margin"
       class="margin-container"
       @mouseenter.stop="() => { makeAllWhiteExcept($refs.margin as HTMLDivElement); }"
       @mouseleave.stop="() => { resetWhite($refs.border, $refs.padding, $refs.size); }">
    <div class="margin-container__label">
      margin

      <SvgIcon class="toggle-lock-icon"
               type="mdi"
               width="16"
               height="16"
               viewBox="0 0 24 22"
               :path="margin.isLinked ? linkIcon : unlinkIcon"
               @click="toggleLinkStatus('margin')">
      </SvgIcon>
    </div>

    <div class="margin-input__top">
      <BoxModelValue :editing="editingMeasure === 'margin-top'"
                     :value="margin.top"
                     @update:value="value => onValueChange('margin', 'top', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.top"
                            :availableUnits="availableUnits"
                            :value="margin.topUnit"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'top')) }">
      </BoxModelUnitSelector>
    </div>
    <div class="margin-input__left">
      <BoxModelValue :editing="editingMeasure === 'margin-left'"
                     :value="margin.left"
                     @update:value="value => onValueChange('margin', 'left', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.left"
                            :availableUnits="availableUnits"
                            :value="margin.leftUnit"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'left')) }">
      </BoxModelUnitSelector>
    </div>
    <div class="margin-input__right">
      <BoxModelValue :editing="editingMeasure === 'margin-right'"
                     :value="margin.right"
                     @update:value="value => onValueChange('margin', 'right', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.right"
                            :availableUnits="availableUnits"
                            :value="margin.rightUnit"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'right')) }">
      </BoxModelUnitSelector>
    </div>
    <div class="margin-input__bottom">
      <BoxModelValue :editing="editingMeasure === 'margin-bottom'"
                     :value="margin.bottom"
                     @update:value="value => onValueChange('margin', 'bottom', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.bottom"
                            :availableUnits="availableUnits"
                            :value="margin.bottomUnit"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'bottom')) }">
      </BoxModelUnitSelector>
    </div>

    <div ref="border"
         class="border-container"
         @mouseenter.stop="() => { makeAllWhiteExcept($refs.border as HTMLDivElement); }"
         @mouseleave.stop="() => { resetWhite($refs.border, $refs.margin); }">
      <div class="border-container__label">
        border

        <SvgIcon class="toggle-lock-icon"
                 type="mdi"
                 width="16"
                 height="16"
                 viewBox="0 0 24 22"
                 :path="border.isLinked ? linkIcon : unlinkIcon"
                 @click="toggleLinkStatus('border')">
        </SvgIcon>
      </div>

      <div class="border-input__top">
        <BoxModelValue :editing="editingMeasure === 'border-top'"
                       :value="border.top"
                       @update:value="value => onValueChange('border', 'top', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.top"
                              :availableUnits="availableUnits"
                              :value="border.topUnit"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'top')) }">
        </BoxModelUnitSelector>
      </div>
      <div class="border-input__left">
        <BoxModelValue :editing="editingMeasure === 'border-left'"
                       :value="border.left"
                       @update:value="value => onValueChange('border', 'left', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.left"
                              :availableUnits="availableUnits"
                              :value="border.leftUnit"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'left')) }">
        </BoxModelUnitSelector>
      </div>
      <div class="border-input__right">
        <BoxModelValue :editing="editingMeasure === 'border-right'"
                       :value="border.right"
                       @update:value="value => onValueChange('border', 'right', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.right"
                              :availableUnits="availableUnits"
                              :value="border.rightUnit"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'right')) }">
        </BoxModelUnitSelector>
      </div>
      <div class="border-input__bottom">
        <BoxModelValue :editing="editingMeasure === 'border-bottom'"
                       :value="border.bottom"
                       @update:value="value => onValueChange('border', 'bottom', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.bottom"
                              :availableUnits="availableUnits"
                              :value="border.bottomUnit"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'bottom')) }">
        </BoxModelUnitSelector>
      </div>

      <div ref="padding"
           class="padding-container"
           @mouseenter.stop="() => { makeAllWhiteExcept($refs.padding as HTMLDivElement); }"
           @mouseleave.stop="() => { resetWhite($refs.padding, $refs.border); }">
        <div class="padding-container__label">
          padding

          <SvgIcon class="toggle-lock-icon"
                   type="mdi"
                   width="16"
                   height="16"
                   viewBox="0 0 24 22"
                   :path="padding.isLinked ? linkIcon : unlinkIcon"
                   @click="toggleLinkStatus('padding')">
          </SvgIcon>
        </div>

        <div class="padding-input__top">
          <BoxModelValue :editing="editingMeasure === 'padding-top'"
                         :value="padding.top"
                         @update:value="value => onValueChange('padding', 'top', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.top"
                                :availableUnits="availableUnits"
                                :value="padding.topUnit"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'top')) }">
          </BoxModelUnitSelector>
        </div>
        <div class="padding-input__left">
          <BoxModelValue :editing="editingMeasure === 'padding-left'"
                         :value="padding.left"
                         @update:value="value => onValueChange('padding', 'left', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.left"
                                :availableUnits="availableUnits"
                                :value="padding.leftUnit"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'left')) }">
          </BoxModelUnitSelector>
        </div>
        <div class="padding-input__right">
          <BoxModelValue :editing="editingMeasure === 'padding-right'"
                         :value="padding.right"
                         @update:value="value => onValueChange('padding', 'right', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.right"
                                :availableUnits="availableUnits"
                                :value="padding.rightUnit"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'right')) }">
          </BoxModelUnitSelector>
        </div>
        <div class="padding-input__bottom">
          <BoxModelValue :editing="editingMeasure === 'padding-bottom'"
                         :value="padding.bottom"
                         @update:value="value => onValueChange('padding', 'bottom', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.bottom"
                                :availableUnits="availableUnits"
                                :value="padding.bottomUnit"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'bottom')) }">
          </BoxModelUnitSelector>
        </div>

        <div ref="size"
             class="size-container"
             @mouseenter.stop="() => { makeAllWhiteExcept($refs.size as HTMLDivElement); }"
             @mouseleave.stop="() => { resetWhite($refs.size, $refs.padding); }">
          <div class="size-container__value-container">
            <div class="width">
              <span v-if="editingMeasure !== 'size-width'"
                    @click.stop="() => { edit('size', 'width'); }">
                {{ size.width ?? '...' }}
              </span>
              <input v-else
                     type="number"
                     ref="inputValue"
                     :value="size.width"
                     @change="event => { onSizeChange('width', event); }"
                     @blur="() => { editingMeasure = null; }" />

              <BoxModelUnitSelector v-show="size.width"
                                    :availableUnits="availableUnits"
                                    :value="size.widthUnit"
                                    @update:value="selectedUnit => { setAndNotify('size', size, model => setUnit(model, selectedUnit, 'width')) }" />
            </div>

            <div class="height">
              <span v-if="editingMeasure !== 'size-height'"
                    @click.stop="() => { edit('size', 'height'); }">
                {{ size.height ?? '...' }}
              </span>
              <input v-else
                     type="number"
                     ref="inputValue"
                     :value="size.height"
                     @change="event => { onSizeChange('height', event); }"
                     @blur="() => { editingMeasure = null; }" />
              <BoxModelUnitSelector v-show="size.height"
                                    :availableUnits="availableUnits"
                                    :value="size.heightUnit"
                                    @update:value="selectedUnit => { setAndNotify('size', size, model => setUnit(model, selectedUnit, 'height')) }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BoxModel } from '../models/box-model';
import { mdiMenuDown, mdiLink, mdiLinkOff } from '@mdi/js';
import { SizeModel } from '../models/size-model';
import BoxModelUnitSelector from './BoxModelUnitSelector.vue';
import BoxModelValue from './BoxModelValue.vue';
import SvgIcon from '@jamescoyle/vue-icon';

export default defineComponent({
  components: { BoxModelValue, BoxModelUnitSelector, SvgIcon },
  props: {
    availableUnits: Array<string>,
    margin: BoxModel,
    border: BoxModel,
    padding: BoxModel,
    size: SizeModel
  },
  data() {
    const editingMeasure: string = null as any;

    return {
      editingMeasure,
      dropdownOpenIcon: mdiMenuDown,
      linkIcon: mdiLink,
      unlinkIcon: mdiLinkOff,
    };
  },
  methods: {
    resetWhite(...elements: unknown[]) {
      elements.map(_ => _ as HTMLDivElement).forEach((el) => {
        el.classList.remove('white');
      });
    },
    makeAllWhiteExcept(element: HTMLDivElement) {
      const elements: HTMLDivElement[] = [
        this.$refs.margin as HTMLDivElement,
        this.$refs.border as HTMLDivElement,
        this.$refs.padding as HTMLDivElement,
        this.$refs.size as HTMLDivElement
      ];

      elements.forEach((el) => {
        if (el !== element) {
          el.classList.add('white');
        } else {
          el.classList.remove('white');
        }
      });
    },
    edit(component: 'margin' | 'border' | 'padding' | 'size', side: 'top' | 'left' | 'right' | 'bottom' | 'width' | 'height') {
      this.editingMeasure = `${component}-${side}`;

      this.$nextTick(() => {
        (this.$refs.inputValue as HTMLInputElement).focus();
      });
    },
    setAndNotify(propertyNameToNotify: string, sourceModel: any, setter: (model: any) => void) {
      let model = propertyNameToNotify === 'size' ? new SizeModel() : new BoxModel();
      model = Object.assign(model, { ...sourceModel });
      setter(model);
      this.$emit(`update:${propertyNameToNotify}`, model);
    },
    setUnit(model: any, unit: string, side: 'top' | 'right' | 'bottom' | 'left' | 'width' | 'height') {
      if (model.hasOwnProperty('isLinked') && model.isLinked) {
        model.topUnit = model.rightUnit = model.bottomUnit = model.leftUnit = unit;

      } else {
        model[`${side}Unit`] = unit;
      }
    },
    toggleLinkStatus(target: 'margin' | 'border' | 'padding') {
      const model: BoxModel = { ...this[target] };
      model.isLinked = !model.isLinked;

      if (model.isLinked) {
        model.left = model.right = model.bottom = model.top;
      }

      this.$emit(`update:${target}`, model);
    },
    onValueChange(target: 'margin' | 'border' | 'padding', side: 'top' | 'left' | 'right' | 'bottom', value: number) {
      const model: BoxModel = Object.assign(new BoxModel(), { ...this[target] });

      if (model.isLinked) {
        model.top = model.left = model.right = model.bottom = value;

      } else {
        model[side] = value;
      }

      this.$emit(`update:${target}`, model);
    },
    onSizeChange(target: 'width' | 'height', event: Event) {
      const eventTarget = event.target as HTMLInputElement;
      let value = +eventTarget.value;

      if (!value || isNaN(value)) {
        value = null;
      }

      const model: SizeModel = { ...this.size };
      model[target] = value;

      this.$emit(`update:size`, model);
    }
  }
});

</script>

<style lang="scss">
$input-font-size: 11px;
$input-color: #000;

$containers-border-color: #000;
$containers-padding: 30px 35px;

$margin-container-background: #f9cc9d;
$border-container-background: #ffeebc;
$padding-container-background: #c4dfb8;
$size-container-background: #a0c6e8;

.horizontal-input {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  left: 50%;
  transform: translateX(-50%);
  color: $input-color;
  font-size: $input-font-size;
}

.vertical-input {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: $input-color;
  font-size: $input-font-size;
  text-align: center;
  width: 28px;

  > :nth-child(1) {
    margin-bottom: -6px;
  }
}

.vertical-input__left {
  display: flex;
  flex-direction: column;
  left: 2px;
}

.vertical-input__right {
  display: flex;
  flex-direction: column;
  right: 2px;
}

.container__label {
  position: absolute;
  top: 0;
  left: 4px;
  color: #000;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;

  .toggle-lock-icon {
    opacity: 0.5;
    cursor: pointer;
    transition: 200ms opacity;

    &:hover {
      opacity: 1;
    }
  }
}

.margin-container {
  width: 300px;
  height: 220px;
  position: relative;
  background: $margin-container-background;
  padding: $containers-padding;
  border: 1px dashed $containers-border-color;
  box-sizing: border-box;

  &.white {
    background: #fff;
  }

  .margin-container__label {
    @extend .container__label;
  }

  .margin-input__top {
    @extend .horizontal-input;
    top: 10px;
  }

  .margin-input__bottom {
    @extend .horizontal-input;
    bottom: 2px;
  }

  .margin-input__left {
    @extend .vertical-input;
    @extend .vertical-input__left;
  }

  .margin-input__right {
    @extend .vertical-input;
    @extend .vertical-input__right;
  }
}

.border-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: $border-container-background;
  padding: $containers-padding;
  border: 1px solid $containers-border-color;
  box-sizing: border-box;

  &.white {
    background: #fff;
  }

  .border-container__label {
    @extend .container__label;
  }

  .border-input__top {
    @extend .horizontal-input;
    top: 10px;
  }

  .border-input__bottom {
    @extend .horizontal-input;
    bottom: 2px;
  }

  .border-input__left {
    @extend .vertical-input;
    @extend .vertical-input__left;
  }

  .border-input__right {
    @extend .vertical-input;
    @extend .vertical-input__right;
  }
}

.padding-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: $padding-container-background;
  padding: $containers-padding;
  border: 1px dashed $containers-border-color;
  box-sizing: border-box;

  &.white {
    background: #fff;
  }

  .padding-container__label {
    @extend .container__label;
  }

  .padding-input__top {
    @extend .horizontal-input;
    top: 10px;
  }

  .padding-input__bottom {
    @extend .horizontal-input;
    bottom: 2px;
  }

  .padding-input__left {
    @extend .vertical-input;
    @extend .vertical-input__left;
  }

  .padding-input__right {
    @extend .vertical-input;
    @extend .vertical-input__right;
  }
}

.size-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: $size-container-background;
  padding: 0;
  border: 1px solid $containers-border-color;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;

  &.white {
    background: #fff;
  }

  .size-container__value-container {
    display: flex;
    flex-direction: row;
    font-size: $input-font-size + 1px;

    .width {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-right: 1px dashed #669dcf;
      padding-right: 2px;
      justify-content: center;

      > :nth-child(1) {
        margin-bottom: -8px;
      }
    }

    .height {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 2px;
      justify-content: center;

      > :nth-child(1) {
        margin-bottom: -8px;
      }
    }
  }
}
</style>