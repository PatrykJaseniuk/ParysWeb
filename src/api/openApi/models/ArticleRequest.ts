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
import type { ArticleRequestData } from './ArticleRequestData';
import {
    ArticleRequestDataFromJSON,
    ArticleRequestDataFromJSONTyped,
    ArticleRequestDataToJSON,
    ArticleRequestDataToJSONTyped,
} from './ArticleRequestData';

/**
 * 
 * @export
 * @interface ArticleRequest
 */
export interface ArticleRequest {
    /**
     * 
     * @type {ArticleRequestData}
     * @memberof ArticleRequest
     */
    data: ArticleRequestData;
}

/**
 * Check if a given object implements the ArticleRequest interface.
 */
export function instanceOfArticleRequest(value: object): value is ArticleRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ArticleRequestFromJSON(json: any): ArticleRequest {
    return ArticleRequestFromJSONTyped(json, false);
}

export function ArticleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ArticleRequestDataFromJSON(json['data']),
    };
}

export function ArticleRequestToJSON(json: any): ArticleRequest {
    return ArticleRequestToJSONTyped(json, false);
}

export function ArticleRequestToJSONTyped(value?: ArticleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ArticleRequestDataToJSON(value['data']),
    };
}

