import { BoxModelEditorStyleOptions } from './box-model-editor-style-options';

export class BoxModelEditorOptions {
  public availableUnits: Array<string> = ['px', 'em', 'rem', 'vw', 'vh', '%'];

  public style: BoxModelEditorStyleOptions = new BoxModelEditorStyleOptions();
}