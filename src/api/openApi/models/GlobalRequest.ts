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
import type { GlobalRequestData } from './GlobalRequestData';
import {
    GlobalRequestDataFromJSON,
    GlobalRequestDataFromJSONTyped,
    GlobalRequestDataToJSON,
    GlobalRequestDataToJSONTyped,
} from './GlobalRequestData';

/**
 * 
 * @export
 * @interface GlobalRequest
 */
export interface GlobalRequest {
    /**
     * 
     * @type {GlobalRequestData}
     * @memberof GlobalRequest
     */
    data: GlobalRequestData;
}

/**
 * Check if a given object implements the GlobalRequest interface.
 */
export function instanceOfGlobalRequest(value: object): value is GlobalRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GlobalRequestFromJSON(json: any): GlobalRequest {
    return GlobalRequestFromJSONTyped(json, false);
}

export function GlobalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': GlobalRequestDataFromJSON(json['data']),
    };
}

export function GlobalRequestToJSON(json: any): GlobalRequest {
    return GlobalRequestToJSONTyped(json, false);
}

export function GlobalRequestToJSONTyped(value?: GlobalRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GlobalRequestDataToJSON(value['data']),
    };
}

