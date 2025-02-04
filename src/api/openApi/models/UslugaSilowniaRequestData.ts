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
 * @interface UslugaSilowniaRequestData
 */
export interface UslugaSilowniaRequestData {
    /**
     * 
     * @type {string}
     * @memberof UslugaSilowniaRequestData
     */
    tytul?: string;
    /**
     * 
     * @type {string}
     * @memberof UslugaSilowniaRequestData
     */
    opis?: string;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof UslugaSilowniaRequestData
     */
    wszystkieZajeciaGrupowe?: Array<ArticleRequestDataCover>;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof UslugaSilowniaRequestData
     */
    wszystkieStrefy?: Array<ArticleRequestDataCover>;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof UslugaSilowniaRequestData
     */
    karnety?: Array<ArticleRequestDataCover>;
    /**
     * 
     * @type {string}
     * @memberof UslugaSilowniaRequestData
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleRequestDataCover>}
     * @memberof UslugaSilowniaRequestData
     */
    localizations?: Array<ArticleRequestDataCover>;
}

/**
 * Check if a given object implements the UslugaSilowniaRequestData interface.
 */
export function instanceOfUslugaSilowniaRequestData(value: object): value is UslugaSilowniaRequestData {
    return true;
}

export function UslugaSilowniaRequestDataFromJSON(json: any): UslugaSilowniaRequestData {
    return UslugaSilowniaRequestDataFromJSONTyped(json, false);
}

export function UslugaSilowniaRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UslugaSilowniaRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'tytul': json['tytul'] == null ? undefined : json['tytul'],
        'opis': json['opis'] == null ? undefined : json['opis'],
        'wszystkieZajeciaGrupowe': json['wszystkieZajeciaGrupowe'] == null ? undefined : ((json['wszystkieZajeciaGrupowe'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
        'wszystkieStrefy': json['wszystkieStrefy'] == null ? undefined : ((json['wszystkieStrefy'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
        'karnety': json['karnety'] == null ? undefined : ((json['karnety'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleRequestDataCoverFromJSON)),
    };
}

export function UslugaSilowniaRequestDataToJSON(json: any): UslugaSilowniaRequestData {
    return UslugaSilowniaRequestDataToJSONTyped(json, false);
}

export function UslugaSilowniaRequestDataToJSONTyped(value?: UslugaSilowniaRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tytul': value['tytul'],
        'opis': value['opis'],
        'wszystkieZajeciaGrupowe': value['wszystkieZajeciaGrupowe'] == null ? undefined : ((value['wszystkieZajeciaGrupowe'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
        'wszystkieStrefy': value['wszystkieStrefy'] == null ? undefined : ((value['wszystkieStrefy'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
        'karnety': value['karnety'] == null ? undefined : ((value['karnety'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleRequestDataCoverToJSON)),
    };
}

