<script lang="ts">
import { defineComponent } from 'vue';
import BoxModelEditor from './components/BoxModelEditor.vue';
import { BoxModel } from './models/box-model';
import { SizeModel } from './models/size-model';

export default defineComponent({
  components: { BoxModelEditor },
  data() {
    return {
      margin: new BoxModel(),
      border: new BoxModel(),
      padding: new BoxModel(),
      size: new SizeModel()
    };
  }
});
</script>

<template>
  <BoxModelEditor :availableUnits="['px', 'em', 'rem', 'vw', 'vh', '%']"
                  :margin="margin"
                  :border="border"
                  :padding="padding"
                  :size="size"
                  @update:margin="value => margin = value"
                  @update:border="value => border = value"
                  @update:padding="value => padding = value"
                  @update:size="value => size = value" />

  <pre :innerHTML="JSON.stringify(margin)"></pre>
  <pre :innerHTML="JSON.stringify(border)"></pre>
  <pre :innerHTML="JSON.stringify(padding)"></pre>
  <pre :innerHTML="JSON.stringify(size)"></pre>
</template>

<style scoped></style>
./models/box-model./models/size-model