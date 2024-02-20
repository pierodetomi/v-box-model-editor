# Vue Box Model Editor

[![npm package version](https://img.shields.io/npm/v/@pierodetomi/v-box-model-editor?logo=npm)](https://www.npmjs.com/package/@pierodetomi/v-box-model-editor) [![build](https://github.com/pierodetomi/v-box-model-editor/actions/workflows/build.yml/badge.svg)](https://github.com/pierodetomi/v-box-model-editor/actions/workflows/build.yml)

**Box Model Editor** is a Vue component that allows the editing of the box model of a DOM element.
This is totally inspired to the Chrome Dev Tools component.

![UI Screenshot](./preview.png)

> [!IMPORTANT]  
> ## FEATURE DISCLAIMER
> This component does **NOT** actually manipulate the DOM in any way: its purpose it to receive input models describing the actual box model of an element, allowing the editing of this model and returning the manipulated model as output.
>
> The typical intended use case for this component is inside an **editor** (or similar kind of product).

## Installation
You can install the package in your project with the following command:

```bash
npm install @pierodetomi/v-box-model-editor
```

## Usage
This library exports the ```BoxModelEditor``` component. You can use it as follows:

```typescript
// INSIDE YOUR CODE
import { BoxModel, SizeModel, BorderModel, BoxModelEditorOptions, BoxModelEditor } from '@pierodetomi/v-box-model-editor'; // Import component
import '@pierodetomi/v-box-model-editor/style.css'; // Import component's style

[...]

margin = new BoxModel();
border = new BorderModel();
padding = new BoxModel();
size = new SizeModel();
options = new BoxModelEditorOptions();
options.availableUnits = [ /* you can override the default available units */ ]
options.style.[style_property] = ... // Replace [style_property] with one of the available options: see below
```

```HTML
<!-- INSIDE YOUR TEMPLATE -->
<BoxModelEditor :options="options"
                :margin="margin"
                :border="border"
                :padding="padding"
                :size="size"
                @update:margin="value => margin = value"
                @update:border="value => border = value"
                @update:padding="value => padding = value"
                @update:size="value => size = value" />
```

## Available ```options```
The ```options``` property expects an instance of the ```BoxEditorModelOptions``` class. This class exposes the following options:

| Option | Type | Default Value | Description |
| --- | --- | --- | --- |
| ```availableUnits``` | ```string[]``` | ```['px', 'em', 'rem', 'vw', 'vh', '%']``` | The units that are available when the user opens the units dropdown |
| ```style``` | ```BoxModelEditorStyleOptions``` | ```new BoxModelEditorStyleOptions()``` | The style options that can be used to personalize the appearance of the component |

The ```BoxModelEditorStyleOptions``` class exposes the following options:

| Option | Type | Default Value | Description |
| --- | --- | --- | --- |
| ```bordersColor``` | ```string``` | ```'#000'``` | The color of the borders of the visual containers |
| ```marginBackgroundColor``` | ```string``` | ```'#f9cc9d'``` | The background color of the **```margin```** model container |
| ```borderBackgroundColor``` | ```string``` | ```'#ffeebc'``` | The background color of the **```border```** model container |
| ```paddingBackgroundColor``` | ```string``` | ```'#c4dfb8'``` | The background color of the **```padding```** model container |
| ```sizeBackgroundColor ``` | ```string``` | ```'#a0c6e8'``` | The background color of the **```size```** model container |
| ```textColor``` | ```string``` | ```'#252525'``` | The color of the text (labels & numbers) |
| ```inputFontSize``` | ```number``` | ```11``` | The font size of the inputs & values displayed |
| ```unitDropdownBackgroundColor``` | ```string``` | ```'#f9f9f9'``` | The background color of the units dropdown |
| ```unitDropdownTextColor``` | ```string``` | ```'#252525'``` | The text color of the units dropdown |
| ```unitDropdownHoverBackgroundColor``` | ```string``` | ```'#d1d1d1'``` | The background color of an item of the units dropdown, when hovered |
| ```unitDropdownHoverTextColor``` | ```string``` | ```'#252525'``` | The text color of an item of the units dropdown, when hovered |
| ```unitDropdownFontSize``` | ```number``` | ```12``` | The font size of the text inside the units dropdown |


## ```box```, ```border``` and ```size``` models
The ```margin``` and ```padding``` properties use the same input/output model, the ```BoxModel```, with the following structure:

```TypeScript
class BoxModel {
  public isLinked: boolean = true;

  public top: number = null;

  public topUnit: string = 'px';
  
  public right: number = null;
  
  public rightUnit: string = 'px';

  public bottom: number = null;
  
  public bottomUnit: string = 'px';

  public left: number = null;

  public leftUnit: string = 'px';
}
```

The ```border``` property uses the ```BorderModel``` input/output model, that's an extension of the ```BoxModel``` model that adds only the ```style``` property (with default value ```'solid'```):

```TypeScript
class BorderModel extends BoxModel {
  public style: string = 'solid';
}
```

The ```size``` property uses the ```SizeModel``` input/output model, with the following structure:


```TypeScript
class SizeModel {
  public width: number = null;
  
  public widthUnit: string = 'px';
  
  public height: number = null;

  public heightUnit: string = 'px';
}
```
