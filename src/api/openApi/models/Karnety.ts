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
import type { KarnetyDostepneStrefyInner } from './KarnetyDostepneStrefyInner';
import {
    KarnetyDostepneStrefyInnerFromJSON,
    KarnetyDostepneStrefyInnerFromJSONTyped,
    KarnetyDostepneStrefyInnerToJSON,
    KarnetyDostepneStrefyInnerToJSONTyped,
} from './KarnetyDostepneStrefyInner';
import type { SharedCennikComponent } from './SharedCennikComponent';
import {
    SharedCennikComponentFromJSON,
    SharedCennikComponentFromJSONTyped,
    SharedCennikComponentToJSON,
    SharedCennikComponentToJSONTyped,
} from './SharedCennikComponent';

/**
 * 
 * @export
 * @interface Karnety
 */
export interface Karnety {
    /**
     * 
     * @type {number}
     * @memberof Karnety
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Karnety
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof Karnety
     */
    nazwa?: string;
    /**
     * 
     * @type {SharedCennikComponent}
     * @memberof Karnety
     */
    cennik?: SharedCennikComponent;
    /**
     * 
     * @type {Array<KarnetyDostepneStrefyInner>}
     * @memberof Karnety
     */
    dostepneStrefy?: Array<KarnetyDostepneStrefyInner>;
    /**
     * 
     * @type {Array<ArticleCoverRelatedInner>}
     * @memberof Karnety
     */
    dostepneZajeciaGrupowe?: Array<ArticleCoverRelatedInner>;
    /**
     * 
     * @type {Date}
     * @memberof Karnety
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Karnety
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Karnety
     */
    publishedAt?: Date;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof Karnety
     */
    createdBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof Karnety
     */
    updatedBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {string}
     * @memberof Karnety
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleCoverRelatedInner>}
     * @memberof Karnety
     */
    localizations?: Array<ArticleCoverRelatedInner>;
}

/**
 * Check if a given object implements the Karnety interface.
 */
export function instanceOfKarnety(value: object): value is Karnety {
    return true;
}

export function KarnetyFromJSON(json: any): Karnety {
    return KarnetyFromJSONTyped(json, false);
}

export function KarnetyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Karnety {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'documentId': json['documentId'] == null ? undefined : json['documentId'],
        'nazwa': json['nazwa'] == null ? undefined : json['nazwa'],
        'cennik': json['cennik'] == null ? undefined : SharedCennikComponentFromJSON(json['cennik']),
        'dostepneStrefy': json['dostepneStrefy'] == null ? undefined : ((json['dostepneStrefy'] as Array<any>).map(KarnetyDostepneStrefyInnerFromJSON)),
        'dostepneZajeciaGrupowe': json['dostepneZajeciaGrupowe'] == null ? undefined : ((json['dostepneZajeciaGrupowe'] as Array<any>).map(ArticleCoverRelatedInnerFromJSON)),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['updatedBy']),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleCoverRelatedInnerFromJSON)),
    };
}

export function KarnetyToJSON(json: any): Karnety {
    return KarnetyToJSONTyped(json, false);
}

export function KarnetyToJSONTyped(value?: Karnety | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentId': value['documentId'],
        'nazwa': value['nazwa'],
        'cennik': SharedCennikComponentToJSON(value['cennik']),
        'dostepneStrefy': value['dostepneStrefy'] == null ? undefined : ((value['dostepneStrefy'] as Array<any>).map(KarnetyDostepneStrefyInnerToJSON)),
        'dostepneZajeciaGrupowe': value['dostepneZajeciaGrupowe'] == null ? undefined : ((value['dostepneZajeciaGrupowe'] as Array<any>).map(ArticleCoverRelatedInnerToJSON)),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt']).toISOString()),
        'createdBy': ArticleCoverRelatedInnerToJSON(value['createdBy']),
        'updatedBy': ArticleCoverRelatedInnerToJSON(value['updatedBy']),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleCoverRelatedInnerToJSON)),
    };
}

