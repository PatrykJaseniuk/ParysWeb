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
import type { ArticleCoverRelatedInner } from './ArticleCoverRelatedInner';
import {
    ArticleCoverRelatedInnerFromJSON,
    ArticleCoverRelatedInnerFromJSONTyped,
    ArticleCoverRelatedInnerToJSON,
    ArticleCoverRelatedInnerToJSONTyped,
} from './ArticleCoverRelatedInner';
import type { UslugiUslugaStandardowaComponent } from './UslugiUslugaStandardowaComponent';
import {
    UslugiUslugaStandardowaComponentFromJSON,
    UslugiUslugaStandardowaComponentFromJSONTyped,
    UslugiUslugaStandardowaComponentToJSON,
    UslugiUslugaStandardowaComponentToJSONTyped,
} from './UslugiUslugaStandardowaComponent';
import type { UslugiSilowniaComponent } from './UslugiSilowniaComponent';
import {
    UslugiSilowniaComponentFromJSON,
    UslugiSilowniaComponentFromJSONTyped,
    UslugiSilowniaComponentToJSON,
    UslugiSilowniaComponentToJSONTyped,
} from './UslugiSilowniaComponent';
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
 * @interface UslugiLocalizationsInner
 */
export interface UslugiLocalizationsInner {
    /**
     * 
     * @type {number}
     * @memberof UslugiLocalizationsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UslugiLocalizationsInner
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof UslugiLocalizationsInner
     */
    nazwa?: string;
    /**
     * 
     * @type {ArticleLocalizationsInnerCover}
     * @memberof UslugiLocalizationsInner
     */
    tlo?: ArticleLocalizationsInnerCover;
    /**
     * 
     * @type {UslugiSilowniaComponent}
     * @memberof UslugiLocalizationsInner
     */
    silownia?: UslugiSilowniaComponent;
    /**
     * 
     * @type {Array<UslugiUslugaStandardowaComponent>}
     * @memberof UslugiLocalizationsInner
     */
    uslugiStandardowe?: Array<UslugiUslugaStandardowaComponent>;
    /**
     * 
     * @type {Date}
     * @memberof UslugiLocalizationsInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UslugiLocalizationsInner
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UslugiLocalizationsInner
     */
    publishedAt?: Date;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof UslugiLocalizationsInner
     */
    createdBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof UslugiLocalizationsInner
     */
    updatedBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {string}
     * @memberof UslugiLocalizationsInner
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleCoverRelatedInner>}
     * @memberof UslugiLocalizationsInner
     */
    localizations?: Array<ArticleCoverRelatedInner>;
}

/**
 * Check if a given object implements the UslugiLocalizationsInner interface.
 */
export function instanceOfUslugiLocalizationsInner(value: object): value is UslugiLocalizationsInner {
    return true;
}

export function UslugiLocalizationsInnerFromJSON(json: any): UslugiLocalizationsInner {
    return UslugiLocalizationsInnerFromJSONTyped(json, false);
}

export function UslugiLocalizationsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UslugiLocalizationsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'documentId': json['documentId'] == null ? undefined : json['documentId'],
        'nazwa': json['nazwa'] == null ? undefined : json['nazwa'],
        'tlo': json['tlo'] == null ? undefined : ArticleLocalizationsInnerCoverFromJSON(json['tlo']),
        'silownia': json['silownia'] == null ? undefined : UslugiSilowniaComponentFromJSON(json['silownia']),
        'uslugiStandardowe': json['uslugiStandardowe'] == null ? undefined : ((json['uslugiStandardowe'] as Array<any>).map(UslugiUslugaStandardowaComponentFromJSON)),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['updatedBy']),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleCoverRelatedInnerFromJSON)),
    };
}

export function UslugiLocalizationsInnerToJSON(json: any): UslugiLocalizationsInner {
    return UslugiLocalizationsInnerToJSONTyped(json, false);
}

export function UslugiLocalizationsInnerToJSONTyped(value?: UslugiLocalizationsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentId': value['documentId'],
        'nazwa': value['nazwa'],
        'tlo': ArticleLocalizationsInnerCoverToJSON(value['tlo']),
        'silownia': UslugiSilowniaComponentToJSON(value['silownia']),
        'uslugiStandardowe': value['uslugiStandardowe'] == null ? undefined : ((value['uslugiStandardowe'] as Array<any>).map(UslugiUslugaStandardowaComponentToJSON)),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt']).toISOString()),
        'createdBy': ArticleCoverRelatedInnerToJSON(value['createdBy']),
        'updatedBy': ArticleCoverRelatedInnerToJSON(value['updatedBy']),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleCoverRelatedInnerToJSON)),
    };
}

