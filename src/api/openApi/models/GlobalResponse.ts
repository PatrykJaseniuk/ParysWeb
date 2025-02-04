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
import type { Global } from './Global';
import {
    GlobalFromJSON,
    GlobalFromJSONTyped,
    GlobalToJSON,
    GlobalToJSONTyped,
} from './Global';

/**
 * 
 * @export
 * @interface GlobalResponse
 */
export interface GlobalResponse {
    /**
     * 
     * @type {Global}
     * @memberof GlobalResponse
     */
    data?: Global;
    /**
     * 
     * @type {object}
     * @memberof GlobalResponse
     */
    meta?: object;
}

/**
 * Check if a given object implements the GlobalResponse interface.
 */
export function instanceOfGlobalResponse(value: object): value is GlobalResponse {
    return true;
}

export function GlobalResponseFromJSON(json: any): GlobalResponse {
    return GlobalResponseFromJSONTyped(json, false);
}

export function GlobalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : GlobalFromJSON(json['data']),
        'meta': json['meta'] == null ? undefined : json['meta'],
    };
}

export function GlobalResponseToJSON(json: any): GlobalResponse {
    return GlobalResponseToJSONTyped(json, false);
}

export function GlobalResponseToJSONTyped(value?: GlobalResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': GlobalToJSON(value['data']),
        'meta': value['meta'],
    };
}

