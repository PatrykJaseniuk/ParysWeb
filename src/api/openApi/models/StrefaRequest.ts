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
import type { StrefaRequestData } from './StrefaRequestData';
import {
    StrefaRequestDataFromJSON,
    StrefaRequestDataFromJSONTyped,
    StrefaRequestDataToJSON,
    StrefaRequestDataToJSONTyped,
} from './StrefaRequestData';

/**
 * 
 * @export
 * @interface StrefaRequest
 */
export interface StrefaRequest {
    /**
     * 
     * @type {StrefaRequestData}
     * @memberof StrefaRequest
     */
    data: StrefaRequestData;
}

/**
 * Check if a given object implements the StrefaRequest interface.
 */
export function instanceOfStrefaRequest(value: object): value is StrefaRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function StrefaRequestFromJSON(json: any): StrefaRequest {
    return StrefaRequestFromJSONTyped(json, false);
}

export function StrefaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrefaRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': StrefaRequestDataFromJSON(json['data']),
    };
}

export function StrefaRequestToJSON(json: any): StrefaRequest {
    return StrefaRequestToJSONTyped(json, false);
}

export function StrefaRequestToJSONTyped(value?: StrefaRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': StrefaRequestDataToJSON(value['data']),
    };
}

