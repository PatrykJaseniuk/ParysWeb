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
import type { ArticleRequestDataCover } from './ArticleRequestDataCover';
import {
    ArticleRequestDataCoverFromJSON,
    ArticleRequestDataCoverFromJSONTyped,
    ArticleRequestDataCoverToJSON,
    ArticleRequestDataCoverToJSONTyped,
} from './ArticleRequestDataCover';
import type { SharedOpcjeKontaktoweComponent } from './SharedOpcjeKontaktoweComponent';
import {
    SharedOpcjeKontaktoweComponentFromJSON,
    SharedOpcjeKontaktoweComponentFromJSONTyped,
    SharedOpcjeKontaktoweComponentToJSON,
    SharedOpcjeKontaktoweComponentToJSONTyped,
} from './SharedOpcjeKontaktoweComponent';

/**
 * 
 * @export
 * @interface KontaktRequestData
 */
export interface KontaktRequestData {
    /**
     * 
     * @type {string}
     * @memberof KontaktRequestData
     */
    tytul?: string;
    /**
     * 
     * @type {Array<SharedOpcjeKontaktoweComponent>}
     * @memberof KontaktRequestData
     */
    opcjeKontaktowe?: Array<SharedOpcjeKontaktoweComponent>;
    /**
     * 
     * @type {string}
     * @memberof KontaktRequestData
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof KontaktRequestData
     */
    localizations?: Array<ArticleRequestDataCover>;
}

/**
 * Check if a given object implements the KontaktRequestData interface.
 */
export function instanceOfKontaktRequestData(value: object): value is KontaktRequestData {
    return true;
}

export function KontaktRequestDataFromJSON(json: any): KontaktRequestData {
    return KontaktRequestDataFromJSONTyped(json, false);
}

export function KontaktRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): KontaktRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'tytul': json['tytul'] == null ? undefined : json['tytul'],
        'opcjeKontaktowe': json['opcjeKontaktowe'] == null ? undefined : ((json['opcjeKontaktowe'] as Array<any>).map(SharedOpcjeKontaktoweComponentFromJSON)),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
    };
}

export function KontaktRequestDataToJSON(json: any): KontaktRequestData {
    return KontaktRequestDataToJSONTyped(json, false);
}

export function KontaktRequestDataToJSONTyped(value?: KontaktRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tytul': value['tytul'],
        'opcjeKontaktowe': value['opcjeKontaktowe'] == null ? undefined : ((value['opcjeKontaktowe'] as Array<any>).map(SharedOpcjeKontaktoweComponentToJSON)),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
    };
}

