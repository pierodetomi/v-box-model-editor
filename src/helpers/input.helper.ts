export class InputHelper {
  private static readonly _acceptedTextValues = ['auto', 'inherit', 'initial', 'unset'];

  public static getNormalizedValue(value: any) {
    if (InputHelper._acceptedTextValues.includes(value)) {
      return value;
    }
    
    value = +value;

    if (!value || isNaN(value)) {
      value = null;
    }

    return value;
  }
}