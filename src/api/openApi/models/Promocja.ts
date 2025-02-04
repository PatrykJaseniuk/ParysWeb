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
import type { ArticleCoverFolderFilesInnerCreatedBy } from './ArticleCoverFolderFilesInnerCreatedBy';
import {
    ArticleCoverFolderFilesInnerCreatedByFromJSON,
    ArticleCoverFolderFilesInnerCreatedByFromJSONTyped,
    ArticleCoverFolderFilesInnerCreatedByToJSON,
    ArticleCoverFolderFilesInnerCreatedByToJSONTyped,
} from './ArticleCoverFolderFilesInnerCreatedBy';
import type { PromocjaLocalizationsInner } from './PromocjaLocalizationsInner';
import {
    PromocjaLocalizationsInnerFromJSON,
    PromocjaLocalizationsInnerFromJSONTyped,
    PromocjaLocalizationsInnerToJSON,
    PromocjaLocalizationsInnerToJSONTyped,
} from './PromocjaLocalizationsInner';

/**
 * 
 * @export
 * @interface Promocja
 */
export interface Promocja {
    /**
     * 
     * @type {number}
     * @memberof Promocja
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Promocja
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof Promocja
     */
    tytul?: string;
    /**
     * 
     * @type {Date}
     * @memberof Promocja
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Promocja
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Promocja
     */
    publishedAt?: Date;
    /**
     * 
     * @type {ArticleCoverFolderFilesInnerCreatedBy}
     * @memberof Promocja
     */
    createdBy?: ArticleCoverFolderFilesInnerCreatedBy;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof Promocja
     */
    updatedBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {string}
     * @memberof Promocja
     */
    locale?: string;
    /**
     * 
     * @type {Array<PromocjaLocalizationsInner>}
     * @memberof Promocja
     */
    localizations?: Array<PromocjaLocalizationsInner>;
}

/**
 * Check if a given object implements the Promocja interface.
 */
export function instanceOfPromocja(value: object): value is Promocja {
    return true;
}

export function PromocjaFromJSON(json: any): Promocja {
    return PromocjaFromJSONTyped(json, false);
}

export function PromocjaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Promocja {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'documentId': json['documentId'] == null ? undefined : json['documentId'],
        'tytul': json['tytul'] == null ? undefined : json['tytul'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : ArticleCoverFolderFilesInnerCreatedByFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['updatedBy']),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(PromocjaLocalizationsInnerFromJSON)),
    };
}

export function PromocjaToJSON(json: any): Promocja {
    return PromocjaToJSONTyped(json, false);
}

export function PromocjaToJSONTyped(value?: Promocja | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentId': value['documentId'],
        'tytul': value['tytul'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt']).toISOString()),
        'createdBy': ArticleCoverFolderFilesInnerCreatedByToJSON(value['createdBy']),
        'updatedBy': ArticleCoverRelatedInnerToJSON(value['updatedBy']),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(PromocjaLocalizationsInnerToJSON)),
    };
}

