<template>
  <div ref="margin"
       class="margin-container"
       :style="styles"
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
                     :font-size="options.style.inputFontSize"
                     @update:value="value => onValueChange('margin', 'top', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.top"
                            :availableUnits="options.availableUnits"
                            :value="margin.topUnit"
                            :background-color="options.style.unitDropdownBackgroundColor"
                            :text-color="options.style.unitDropdownTextColor"
                            :font-size="options.style.unitDropdownFontSize"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'top')) }">
      </BoxModelUnitSelector>
    </div>
    <div class="margin-input__left">
      <BoxModelValue :editing="editingMeasure === 'margin-left'"
                     :value="margin.left"
                     :font-size="options.style.inputFontSize"
                     @update:value="value => onValueChange('margin', 'left', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.left"
                            :availableUnits="options.availableUnits"
                            :value="margin.leftUnit"
                            :background-color="options.style.unitDropdownBackgroundColor"
                            :text-color="options.style.unitDropdownTextColor"
                            :font-size="options.style.unitDropdownFontSize"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'left')) }">
      </BoxModelUnitSelector>
    </div>
    <div class="margin-input__right">
      <BoxModelValue :editing="editingMeasure === 'margin-right'"
                     :value="margin.right"
                     :font-size="options.style.inputFontSize"
                     @update:value="value => onValueChange('margin', 'right', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.right"
                            :availableUnits="options.availableUnits"
                            :value="margin.rightUnit"
                            :background-color="options.style.unitDropdownBackgroundColor"
                            :text-color="options.style.unitDropdownTextColor"
                            :font-size="options.style.unitDropdownFontSize"
                            @update:value="selectedUnit => { setAndNotify('margin', margin, model => setUnit(model, selectedUnit, 'right')) }">
      </BoxModelUnitSelector>
    </div>
    <div class="margin-input__bottom">
      <BoxModelValue :editing="editingMeasure === 'margin-bottom'"
                     :value="margin.bottom"
                     :font-size="options.style.inputFontSize"
                     @update:value="value => onValueChange('margin', 'bottom', value)">
      </BoxModelValue>
      <BoxModelUnitSelector v-show="margin.bottom"
                            :availableUnits="options.availableUnits"
                            :value="margin.bottomUnit"
                            :background-color="options.style.unitDropdownBackgroundColor"
                            :text-color="options.style.unitDropdownTextColor"
                            :font-size="options.style.unitDropdownFontSize"
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
                       :font-size="options.style.inputFontSize"
                       @update:value="value => onValueChange('border', 'top', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.top"
                              :availableUnits="options.availableUnits"
                              :value="border.topUnit"
                              :background-color="options.style.unitDropdownBackgroundColor"
                              :text-color="options.style.unitDropdownTextColor"
                              :font-size="options.style.unitDropdownFontSize"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'top')) }">
        </BoxModelUnitSelector>
      </div>
      <div class="border-input__left">
        <BoxModelValue :editing="editingMeasure === 'border-left'"
                       :value="border.left"
                       :font-size="options.style.inputFontSize"
                       @update:value="value => onValueChange('border', 'left', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.left"
                              :availableUnits="options.availableUnits"
                              :value="border.leftUnit"
                              :background-color="options.style.unitDropdownBackgroundColor"
                              :text-color="options.style.unitDropdownTextColor"
                              :font-size="options.style.unitDropdownFontSize"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'left')) }">
        </BoxModelUnitSelector>
      </div>
      <div class="border-input__right">
        <BoxModelValue :editing="editingMeasure === 'border-right'"
                       :value="border.right"
                       :font-size="options.style.inputFontSize"
                       @update:value="value => onValueChange('border', 'right', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.right"
                              :availableUnits="options.availableUnits"
                              :value="border.rightUnit"
                              :background-color="options.style.unitDropdownBackgroundColor"
                              :text-color="options.style.unitDropdownTextColor"
                              :font-size="options.style.unitDropdownFontSize"
                              @update:value="selectedUnit => { setAndNotify('border', border, model => setUnit(model, selectedUnit, 'right')) }">
        </BoxModelUnitSelector>
      </div>
      <div class="border-input__bottom">
        <BoxModelValue :editing="editingMeasure === 'border-bottom'"
                       :value="border.bottom"
                       :font-size="options.style.inputFontSize"
                       @update:value="value => onValueChange('border', 'bottom', value)">
        </BoxModelValue>
        <BoxModelUnitSelector v-show="border.bottom"
                              :availableUnits="options.availableUnits"
                              :value="border.bottomUnit"
                              :background-color="options.style.unitDropdownBackgroundColor"
                              :text-color="options.style.unitDropdownTextColor"
                              :font-size="options.style.unitDropdownFontSize"
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
                         :font-size="options.style.inputFontSize"
                         @update:value="value => onValueChange('padding', 'top', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.top"
                                :availableUnits="options.availableUnits"
                                :value="padding.topUnit"
                                :background-color="options.style.unitDropdownBackgroundColor"
                                :text-color="options.style.unitDropdownTextColor"
                                :font-size="options.style.unitDropdownFontSize"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'top')) }">
          </BoxModelUnitSelector>
        </div>
        <div class="padding-input__left">
          <BoxModelValue :editing="editingMeasure === 'padding-left'"
                         :value="padding.left"
                         :font-size="options.style.inputFontSize"
                         @update:value="value => onValueChange('padding', 'left', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.left"
                                :availableUnits="options.availableUnits"
                                :value="padding.leftUnit"
                                :background-color="options.style.unitDropdownBackgroundColor"
                                :text-color="options.style.unitDropdownTextColor"
                                :font-size="options.style.unitDropdownFontSize"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'left')) }">
          </BoxModelUnitSelector>
        </div>
        <div class="padding-input__right">
          <BoxModelValue :editing="editingMeasure === 'padding-right'"
                         :value="padding.right"
                         :font-size="options.style.inputFontSize"
                         @update:value="value => onValueChange('padding', 'right', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.right"
                                :availableUnits="options.availableUnits"
                                :value="padding.rightUnit"
                                :background-color="options.style.unitDropdownBackgroundColor"
                                :text-color="options.style.unitDropdownTextColor"
                                :font-size="options.style.unitDropdownFontSize"
                                @update:value="selectedUnit => { setAndNotify('padding', padding, model => setUnit(model, selectedUnit, 'right')) }">
          </BoxModelUnitSelector>
        </div>
        <div class="padding-input__bottom">
          <BoxModelValue :editing="editingMeasure === 'padding-bottom'"
                         :value="padding.bottom"
                         :font-size="options.style.inputFontSize"
                         @update:value="value => onValueChange('padding', 'bottom', value)">
          </BoxModelValue>
          <BoxModelUnitSelector v-show="padding.bottom"
                                :availableUnits="options.availableUnits"
                                :value="padding.bottomUnit"
                                :background-color="options.style.unitDropdownBackgroundColor"
                                :text-color="options.style.unitDropdownTextColor"
                                :font-size="options.style.unitDropdownFontSize"
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
                     ref="inputValue"
                     :value="size.width"
                     @change="event => { onSizeChange('width', event); }"
                     @blur="() => { editingMeasure = null; }" />

              <BoxModelUnitSelector v-show="size.width"
                                    :availableUnits="options.availableUnits"
                                    :value="size.widthUnit"
                                    :background-color="options.style.unitDropdownBackgroundColor"
                                    :text-color="options.style.unitDropdownTextColor"
                                    :font-size="options.style.unitDropdownFontSize"
                                    @update:value="selectedUnit => { setAndNotify('size', size, model => setUnit(model, selectedUnit, 'width')) }" />
            </div>

            <div class="height">
              <span v-if="editingMeasure !== 'size-height'"
                    @click.stop="() => { edit('size', 'height'); }">
                {{ size.height ?? '...' }}
              </span>
              <input v-else
                     ref="inputValue"
                     :value="size.height"
                     @change="event => { onSizeChange('height', event); }"
                     @blur="() => { editingMeasure = null; }" />
              <BoxModelUnitSelector v-show="size.height"
                                    :availableUnits="options.availableUnits"
                                    :value="size.heightUnit"
                                    :background-color="options.style.unitDropdownBackgroundColor"
                                    :text-color="options.style.unitDropdownTextColor"
                                    :font-size="options.style.unitDropdownFontSize"
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
import { BoxModelEditorOptions } from '../models/box-model-editor-options';

export default defineComponent({
  components: { BoxModelValue, BoxModelUnitSelector, SvgIcon },
  props: {
    margin: BoxModel,
    border: BoxModel,
    padding: BoxModel,
    size: SizeModel,
    options: BoxModelEditorOptions
  },
  computed: {
    styles() {
      return {
        '--borders-color': this.options.style.bordersColor,
        '--margin-background-color': this.options.style.marginBackgroundColor,
        '--border-background-color': this.options.style.borderBackgroundColor,
        '--padding-background-color': this.options.style.paddingBackgroundColor,
        '--size-background-color': this.options.style.sizeBackgroundColor,
        '--text-color': this.options.style.textColor,
        '--input-font-size': `${this.options.style.inputFontSize}px`
      }
    }
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
$containers-padding: 30px 35px;

.horizontal-input {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-color);
  font-size: var(--input-font-size);
}

.vertical-input {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-color);
  font-size: var(--input-font-size);
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
  color: var(--text-color);
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
  background: var(--margin-background-color);
  padding: $containers-padding;
  border: 1px dashed var(--borders-color);
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
  background: var(--border-background-color);
  padding: $containers-padding;
  border: 1px solid var(--borders-color);
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
  background: var(--padding-background-color);
  padding: $containers-padding;
  border: 1px dashed var(--borders-color);
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
  background: var(--size-background-color);
  padding: 0;
  border: 1px solid var(--borders-color);
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
    font-size: var(--input-font-size);

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

      input {
        font-size: var(--input-font-size);
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

      input {
        font-size: var(--input-font-size);
      }
    }
  }
}
</style>