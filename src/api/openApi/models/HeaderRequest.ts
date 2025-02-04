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
import type { HeaderRequestData } from './HeaderRequestData';
import {
    HeaderRequestDataFromJSON,
    HeaderRequestDataFromJSONTyped,
    HeaderRequestDataToJSON,
    HeaderRequestDataToJSONTyped,
} from './HeaderRequestData';

/**
 * 
 * @export
 * @interface HeaderRequest
 */
export interface HeaderRequest {
    /**
     * 
     * @type {HeaderRequestData}
     * @memberof HeaderRequest
     */
    data: HeaderRequestData;
}

/**
 * Check if a given object implements the HeaderRequest interface.
 */
export function instanceOfHeaderRequest(value: object): value is HeaderRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function HeaderRequestFromJSON(json: any): HeaderRequest {
    return HeaderRequestFromJSONTyped(json, false);
}

export function HeaderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeaderRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': HeaderRequestDataFromJSON(json['data']),
    };
}

export function HeaderRequestToJSON(json: any): HeaderRequest {
    return HeaderRequestToJSONTyped(json, false);
}

export function HeaderRequestToJSONTyped(value?: HeaderRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': HeaderRequestDataToJSON(value['data']),
    };
}

