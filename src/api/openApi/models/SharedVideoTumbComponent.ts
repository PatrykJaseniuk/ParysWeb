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
import type { ArticleLocalizationsInnerCover } from './ArticleLocalizationsInnerCover';
import {
    ArticleLocalizationsInnerCoverFromJSON,
    ArticleLocalizationsInnerCoverFromJSONTyped,
    ArticleLocalizationsInnerCoverToJSON,
    ArticleLocalizationsInnerCoverToJSONTyped,
} from './ArticleLocalizationsInnerCover';

/**
 * 
 * @export
 * @interface SharedVideoTumbComponent
 */
export interface SharedVideoTumbComponent {
    /**
     * 
     * @type {number}
     * @memberof SharedVideoTumbComponent
     */
    id?: number;
    /**
     * 
     * @type {ArticleLocalizationsInnerCover}
     * @memberof SharedVideoTumbComponent
     */
    video?: ArticleLocalizationsInnerCover;
    /**
     * 
     * @type {ArticleLocalizationsInnerCover}
     * @memberof SharedVideoTumbComponent
     */
    tumbNail?: ArticleLocalizationsInnerCover;
}

/**
 * Check if a given object implements the SharedVideoTumbComponent interface.
 */
export function instanceOfSharedVideoTumbComponent(value: object): value is SharedVideoTumbComponent {
    return true;
}

export function SharedVideoTumbComponentFromJSON(json: any): SharedVideoTumbComponent {
    return SharedVideoTumbComponentFromJSONTyped(json, false);
}

export function SharedVideoTumbComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedVideoTumbComponent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'video': json['video'] == null ? undefined : ArticleLocalizationsInnerCoverFromJSON(json['video']),
        'tumbNail': json['tumbNail'] == null ? undefined : ArticleLocalizationsInnerCoverFromJSON(json['tumbNail']),
    };
}

export function SharedVideoTumbComponentToJSON(json: any): SharedVideoTumbComponent {
    return SharedVideoTumbComponentToJSONTyped(json, false);
}

export function SharedVideoTumbComponentToJSONTyped(value?: SharedVideoTumbComponent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'video': ArticleLocalizationsInnerCoverToJSON(value['video']),
        'tumbNail': ArticleLocalizationsInnerCoverToJSON(value['tumbNail']),
    };
}

