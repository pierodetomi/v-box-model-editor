export class InputHelper {
  private static readonly _acceptedTextValues = ['auto', 'inherit', 'initial', 'unset'];

  public static getNormalizedValue(value: any) {
    if (InputHelper._acceptedTextValues.includes(value)) {
      return value;
    }

    if (value?.length === 0) {
      return null;
    }
    
    value = +value;

    if (isNaN(value)) {
      return null;
    }

    return value;
  }
}