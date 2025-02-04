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
import type { KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInner } from './KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInner';
import {
    KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInnerFromJSON,
    KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInnerFromJSONTyped,
    KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInnerToJSON,
    KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInnerToJSONTyped,
} from './KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInner';
import type { StrefaKarnetsInnerDostepneStrefyInner } from './StrefaKarnetsInnerDostepneStrefyInner';
import {
    StrefaKarnetsInnerDostepneStrefyInnerFromJSON,
    StrefaKarnetsInnerDostepneStrefyInnerFromJSONTyped,
    StrefaKarnetsInnerDostepneStrefyInnerToJSON,
    StrefaKarnetsInnerDostepneStrefyInnerToJSONTyped,
} from './StrefaKarnetsInnerDostepneStrefyInner';
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
 * @interface StrefaKarnetsInner
 */
export interface StrefaKarnetsInner {
    /**
     * 
     * @type {number}
     * @memberof StrefaKarnetsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof StrefaKarnetsInner
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof StrefaKarnetsInner
     */
    nazwa?: string;
    /**
     * 
     * @type {SharedCennikComponent}
     * @memberof StrefaKarnetsInner
     */
    cennik?: SharedCennikComponent;
    /**
     * 
     * @type {Array<StrefaKarnetsInnerDostepneStrefyInner>}
     * @memberof StrefaKarnetsInner
     */
    dostepneStrefy?: Array<StrefaKarnetsInnerDostepneStrefyInner>;
    /**
     * 
     * @type {Array<KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInner>}
     * @memberof StrefaKarnetsInner
     */
    dostepneZajeciaGrupowe?: Array<KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInner>;
    /**
     * 
     * @type {Date}
     * @memberof StrefaKarnetsInner
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof StrefaKarnetsInner
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof StrefaKarnetsInner
     */
    publishedAt?: Date;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof StrefaKarnetsInner
     */
    createdBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof StrefaKarnetsInner
     */
    updatedBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {string}
     * @memberof StrefaKarnetsInner
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleCoverRelatedInner>}
     * @memberof StrefaKarnetsInner
     */
    localizations?: Array<ArticleCoverRelatedInner>;
}

/**
 * Check if a given object implements the StrefaKarnetsInner interface.
 */
export function instanceOfStrefaKarnetsInner(value: object): value is StrefaKarnetsInner {
    return true;
}

export function StrefaKarnetsInnerFromJSON(json: any): StrefaKarnetsInner {
    return StrefaKarnetsInnerFromJSONTyped(json, false);
}

export function StrefaKarnetsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrefaKarnetsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'documentId': json['documentId'] == null ? undefined : json['documentId'],
        'nazwa': json['nazwa'] == null ? undefined : json['nazwa'],
        'cennik': json['cennik'] == null ? undefined : SharedCennikComponentFromJSON(json['cennik']),
        'dostepneStrefy': json['dostepneStrefy'] == null ? undefined : ((json['dostepneStrefy'] as Array<any>).map(StrefaKarnetsInnerDostepneStrefyInnerFromJSON)),
        'dostepneZajeciaGrupowe': json['dostepneZajeciaGrupowe'] == null ? undefined : ((json['dostepneZajeciaGrupowe'] as Array<any>).map(KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInnerFromJSON)),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['updatedBy']),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleCoverRelatedInnerFromJSON)),
    };
}

export function StrefaKarnetsInnerToJSON(json: any): StrefaKarnetsInner {
    return StrefaKarnetsInnerToJSONTyped(json, false);
}

export function StrefaKarnetsInnerToJSONTyped(value?: StrefaKarnetsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentId': value['documentId'],
        'nazwa': value['nazwa'],
        'cennik': SharedCennikComponentToJSON(value['cennik']),
        'dostepneStrefy': value['dostepneStrefy'] == null ? undefined : ((value['dostepneStrefy'] as Array<any>).map(StrefaKarnetsInnerDostepneStrefyInnerToJSON)),
        'dostepneZajeciaGrupowe': value['dostepneZajeciaGrupowe'] == null ? undefined : ((value['dostepneZajeciaGrupowe'] as Array<any>).map(KarnetyDostepneStrefyInnerKarnetsInnerDostepneZajeciaGrupoweInnerToJSON)),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt']).toISOString()),
        'createdBy': ArticleCoverRelatedInnerToJSON(value['createdBy']),
        'updatedBy': ArticleCoverRelatedInnerToJSON(value['updatedBy']),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleCoverRelatedInnerToJSON)),
    };
}

