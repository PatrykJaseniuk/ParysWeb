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
 * @interface ErrorError
 */
export interface ErrorError {
    /**
     * 
     * @type {number}
     * @memberof ErrorError
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorError
     */
    message?: string;
    /**
     * 
     * @type {object}
     * @memberof ErrorError
     */
    details?: object;
}

/**
 * Check if a given object implements the ErrorError interface.
 */
export function instanceOfErrorError(value: object): value is ErrorError {
    return true;
}

export function ErrorErrorFromJSON(json: any): ErrorError {
    return ErrorErrorFromJSONTyped(json, false);
}

export function ErrorErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorError {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : json['status'],
        'name': json['name'] == null ? undefined : json['name'],
        'message': json['message'] == null ? undefined : json['message'],
        'details': json['details'] == null ? undefined : json['details'],
    };
}

export function ErrorErrorToJSON(json: any): ErrorError {
    return ErrorErrorToJSONTyped(json, false);
}

export function ErrorErrorToJSONTyped(value?: ErrorError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'name': value['name'],
        'message': value['message'],
        'details': value['details'],
    };
}

