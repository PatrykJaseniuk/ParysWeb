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
 * @interface ArticleCoverRelatedInner
 */
export interface ArticleCoverRelatedInner {
    /**
     * 
     * @type {number}
     * @memberof ArticleCoverRelatedInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ArticleCoverRelatedInner
     */
    documentId?: string;
}

/**
 * Check if a given object implements the ArticleCoverRelatedInner interface.
 */
export function instanceOfArticleCoverRelatedInner(value: object): value is ArticleCoverRelatedInner {
    return true;
}

export function ArticleCoverRelatedInnerFromJSON(json: any): ArticleCoverRelatedInner {
    return ArticleCoverRelatedInnerFromJSONTyped(json, false);
}

export function ArticleCoverRelatedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleCoverRelatedInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'documentId': json['documentId'] == null ? undefined : json['documentId'],
    };
}

export function ArticleCoverRelatedInnerToJSON(json: any): ArticleCoverRelatedInner {
    return ArticleCoverRelatedInnerToJSONTyped(json, false);
}

export function ArticleCoverRelatedInnerToJSONTyped(value?: ArticleCoverRelatedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentId': value['documentId'],
    };
}

