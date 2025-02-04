/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UploadIdIdPostRequestFileInfo
 */
export interface UploadIdIdPostRequestFileInfo {
    /**
     * 
     * @type {string}
     * @memberof UploadIdIdPostRequestFileInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadIdIdPostRequestFileInfo
     */
    alternativeText?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadIdIdPostRequestFileInfo
     */
    caption?: string;
}

/**
 * Check if a given object implements the UploadIdIdPostRequestFileInfo interface.
 */
export function instanceOfUploadIdIdPostRequestFileInfo(value: object): value is UploadIdIdPostRequestFileInfo {
    return true;
}

export function UploadIdIdPostRequestFileInfoFromJSON(json: any): UploadIdIdPostRequestFileInfo {
    return UploadIdIdPostRequestFileInfoFromJSONTyped(json, false);
}

export function UploadIdIdPostRequestFileInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadIdIdPostRequestFileInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'alternativeText': json['alternativeText'] == null ? undefined : json['alternativeText'],
        'caption': json['caption'] == null ? undefined : json['caption'],
    };
}

export function UploadIdIdPostRequestFileInfoToJSON(json: any): UploadIdIdPostRequestFileInfo {
    return UploadIdIdPostRequestFileInfoToJSONTyped(json, false);
}

export function UploadIdIdPostRequestFileInfoToJSONTyped(value?: UploadIdIdPostRequestFileInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'alternativeText': value['alternativeText'],
        'caption': value['caption'],
    };
}

