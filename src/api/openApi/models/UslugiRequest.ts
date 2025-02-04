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
import type { UslugiRequestData } from './UslugiRequestData';
import {
    UslugiRequestDataFromJSON,
    UslugiRequestDataFromJSONTyped,
    UslugiRequestDataToJSON,
    UslugiRequestDataToJSONTyped,
} from './UslugiRequestData';

/**
 * 
 * @export
 * @interface UslugiRequest
 */
export interface UslugiRequest {
    /**
     * 
     * @type {UslugiRequestData}
     * @memberof UslugiRequest
     */
    data: UslugiRequestData;
}

/**
 * Check if a given object implements the UslugiRequest interface.
 */
export function instanceOfUslugiRequest(value: object): value is UslugiRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UslugiRequestFromJSON(json: any): UslugiRequest {
    return UslugiRequestFromJSONTyped(json, false);
}

export function UslugiRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UslugiRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UslugiRequestDataFromJSON(json['data']),
    };
}

export function UslugiRequestToJSON(json: any): UslugiRequest {
    return UslugiRequestToJSONTyped(json, false);
}

export function UslugiRequestToJSONTyped(value?: UslugiRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': UslugiRequestDataToJSON(value['data']),
    };
}

