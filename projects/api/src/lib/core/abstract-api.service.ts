import { HttpClient } from '@angular/common/http';

type InputQuery = Record<string, string | number>;

type OutputQuery = Record<string, string>;

export abstract class AbstractApi {
  protected static BASE_URL = 'http://127.0.0.1:8090';
  protected abstract http: HttpClient;

  protected abstract apiUrl: string;

  /**
   * Converts Object to query string
   * @param {InputQuery} payload - Object with any keys and values of type string or number
   * @returns {string} query string, including question mark `?`
   */
  protected makeQueryParams(payload: InputQuery): string {
    const stringifiedPayload = this.convertToStrings(payload);

    const url = new URLSearchParams(stringifiedPayload);

    return '?' + url.toString();
  }

  /**
   * Generates usable URL for images
   * @param {string} collectionId
   * @param {string} entityId
   * @param {string} fileName
   * @returns {string}
   */
  public makeFileUrl = (
    collectionId: string,
    entityId: string,
    fileName: string,
  ) => {
    return `/api/files/${collectionId}/${entityId}/${fileName}`;
  };

  /**  Maps from type InputQuery to type OutputQuery.
   *
   *  I.e. - converts all `number` values to `string`
   * @param {InputQuery} originalObject
   * @returns {OutputQuery}
   */
  private convertToStrings(originalObject: InputQuery): OutputQuery {
    const convertedObject: OutputQuery = {};

    for (const key in originalObject) {
      if (Object.prototype.hasOwnProperty.call(originalObject, key)) {
        const originalValue = originalObject[key];
        const stringValue = String(originalValue);
        convertedObject[key] = stringValue;
      }
    }

    return convertedObject;
  }
}
