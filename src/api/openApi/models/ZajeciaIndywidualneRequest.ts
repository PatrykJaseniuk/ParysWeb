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
import type { ZajeciaIndywidualneRequestData } from './ZajeciaIndywidualneRequestData';
import {
    ZajeciaIndywidualneRequestDataFromJSON,
    ZajeciaIndywidualneRequestDataFromJSONTyped,
    ZajeciaIndywidualneRequestDataToJSON,
    ZajeciaIndywidualneRequestDataToJSONTyped,
} from './ZajeciaIndywidualneRequestData';

/**
 * 
 * @export
 * @interface ZajeciaIndywidualneRequest
 */
export interface ZajeciaIndywidualneRequest {
    /**
     * 
     * @type {ZajeciaIndywidualneRequestData}
     * @memberof ZajeciaIndywidualneRequest
     */
    data: ZajeciaIndywidualneRequestData;
}

/**
 * Check if a given object implements the ZajeciaIndywidualneRequest interface.
 */
export function instanceOfZajeciaIndywidualneRequest(value: object): value is ZajeciaIndywidualneRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ZajeciaIndywidualneRequestFromJSON(json: any): ZajeciaIndywidualneRequest {
    return ZajeciaIndywidualneRequestFromJSONTyped(json, false);
}

export function ZajeciaIndywidualneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZajeciaIndywidualneRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ZajeciaIndywidualneRequestDataFromJSON(json['data']),
    };
}

export function ZajeciaIndywidualneRequestToJSON(json: any): ZajeciaIndywidualneRequest {
    return ZajeciaIndywidualneRequestToJSONTyped(json, false);
}

export function ZajeciaIndywidualneRequestToJSONTyped(value?: ZajeciaIndywidualneRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ZajeciaIndywidualneRequestDataToJSON(value['data']),
    };
}

