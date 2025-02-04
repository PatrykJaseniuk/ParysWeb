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
import type { Uslugi } from './Uslugi';
import {
    UslugiFromJSON,
    UslugiFromJSONTyped,
    UslugiToJSON,
    UslugiToJSONTyped,
} from './Uslugi';

/**
 * 
 * @export
 * @interface UslugiResponse
 */
export interface UslugiResponse {
    /**
     * 
     * @type {Uslugi}
     * @memberof UslugiResponse
     */
    data?: Uslugi;
    /**
     * 
     * @type {object}
     * @memberof UslugiResponse
     */
    meta?: object;
}

/**
 * Check if a given object implements the UslugiResponse interface.
 */
export function instanceOfUslugiResponse(value: object): value is UslugiResponse {
    return true;
}

export function UslugiResponseFromJSON(json: any): UslugiResponse {
    return UslugiResponseFromJSONTyped(json, false);
}

export function UslugiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UslugiResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : UslugiFromJSON(json['data']),
        'meta': json['meta'] == null ? undefined : json['meta'],
    };
}

export function UslugiResponseToJSON(json: any): UslugiResponse {
    return UslugiResponseToJSONTyped(json, false);
}

export function UslugiResponseToJSONTyped(value?: UslugiResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': UslugiToJSON(value['data']),
        'meta': value['meta'],
    };
}

