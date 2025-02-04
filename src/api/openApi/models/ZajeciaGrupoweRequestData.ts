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

/**
 * 
 * @export
 * @interface ZajeciaGrupoweRequestData
 */
export interface ZajeciaGrupoweRequestData {
    /**
     * 
     * @type {string}
     * @memberof ZajeciaGrupoweRequestData
     */
    tytul?: string;
    /**
     * 
     * @type {string}
     * @memberof ZajeciaGrupoweRequestData
     */
    kalendarzURL?: string;
    /**
     * 
     * @type {string}
     * @memberof ZajeciaGrupoweRequestData
     */
    opis?: string;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof ZajeciaGrupoweRequestData
     */
    zajeciaGrupowe?: Array<ArticleRequestDataCover>;
    /**
     * 
     * @type {string}
     * @memberof ZajeciaGrupoweRequestData
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof ZajeciaGrupoweRequestData
     */
    localizations?: Array<ArticleRequestDataCover>;
}

/**
 * Check if a given object implements the ZajeciaGrupoweRequestData interface.
 */
export function instanceOfZajeciaGrupoweRequestData(value: object): value is ZajeciaGrupoweRequestData {
    return true;
}

export function ZajeciaGrupoweRequestDataFromJSON(json: any): ZajeciaGrupoweRequestData {
    return ZajeciaGrupoweRequestDataFromJSONTyped(json, false);
}

export function ZajeciaGrupoweRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZajeciaGrupoweRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'tytul': json['tytul'] == null ? undefined : json['tytul'],
        'kalendarzURL': json['kalendarzURL'] == null ? undefined : json['kalendarzURL'],
        'opis': json['opis'] == null ? undefined : json['opis'],
        'zajeciaGrupowe': json['zajeciaGrupowe'] == null ? undefined : ((json['zajeciaGrupowe'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
    };
}

export function ZajeciaGrupoweRequestDataToJSON(json: any): ZajeciaGrupoweRequestData {
    return ZajeciaGrupoweRequestDataToJSONTyped(json, false);
}

export function ZajeciaGrupoweRequestDataToJSONTyped(value?: ZajeciaGrupoweRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tytul': value['tytul'],
        'kalendarzURL': value['kalendarzURL'],
        'opis': value['opis'],
        'zajeciaGrupowe': value['zajeciaGrupowe'] == null ? undefined : ((value['zajeciaGrupowe'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
    };
}

