<script lang="ts">
import { defineComponent } from 'vue';
import BoxModelEditor from './components/BoxModelEditor.vue';
import { BoxModel } from './models/box-model';
import { BorderModel } from './models/border-model';
import { SizeModel } from './models/size-model';
import { BoxModelEditorOptions } from './models/box-model-editor-options';

export default defineComponent({
  components: { BoxModelEditor },
  data() {
    return {
      margin: new BoxModel(),
      border: new BorderModel(),
      padding: new BoxModel(),
      size: new SizeModel(),
      options: new BoxModelEditorOptions()
    };
  }
});
</script>

<template>
  <BoxModelEditor :options="options"
                  :margin="margin"
                  :border="border"
                  :padding="padding"
                  :size="size"
                  @update:margin="value => margin = value"
                  @update:border="value => border = value"
                  @update:padding="value => padding = value"
                  @update:size="value => size = value" />

  <div class="debug-info">
    <h2>DEBUG INFO</h2>

    <strong>Options</strong>
    <pre :innerHTML="JSON.stringify(options)"></pre>
    <strong>Margin</strong>
    <pre :innerHTML="JSON.stringify(margin)"></pre>
    <strong>Border</strong>
    <pre :innerHTML="JSON.stringify(border)"></pre>
    <strong>Padding</strong>
    <pre :innerHTML="JSON.stringify(padding)"></pre>
    <strong>Size</strong>
    <pre :innerHTML="JSON.stringify(size)"></pre>
  </div>
</template>

<style scoped>
.debug-info {
  margin-top: 30px;
  padding: 10px 20px 20px 20px;
  border: 1px solid #aac7f3;
  background: #dde7f7;
  border-radius: 4px;
  width: 100%;
  overflow-x: auto;
}
</style>