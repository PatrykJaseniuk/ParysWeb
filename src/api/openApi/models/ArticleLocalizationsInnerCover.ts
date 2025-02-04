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

/**
 * 
 * @export
 * @interface ArticleLocalizationsInnerCover
 */
export interface ArticleLocalizationsInnerCover {
    /**
     * 
     * @type {number}
     * @memberof ArticleLocalizationsInnerCover
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    alternativeText?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    caption?: string;
    /**
     * 
     * @type {number}
     * @memberof ArticleLocalizationsInnerCover
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ArticleLocalizationsInnerCover
     */
    height?: number;
    /**
     * 
     * @type {any}
     * @memberof ArticleLocalizationsInnerCover
     */
    formats?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    ext?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    mime?: string;
    /**
     * 
     * @type {number}
     * @memberof ArticleLocalizationsInnerCover
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    previewUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    provider?: string;
    /**
     * 
     * @type {any}
     * @memberof ArticleLocalizationsInnerCover
     */
    providerMetadata?: any | null;
    /**
     * 
     * @type {Array<ArticleCoverRelatedInner>}
     * @memberof ArticleLocalizationsInnerCover
     */
    related?: Array<ArticleCoverRelatedInner>;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof ArticleLocalizationsInnerCover
     */
    folder?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    folderPath?: string;
    /**
     * 
     * @type {Date}
     * @memberof ArticleLocalizationsInnerCover
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ArticleLocalizationsInnerCover
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ArticleLocalizationsInnerCover
     */
    publishedAt?: Date;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof ArticleLocalizationsInnerCover
     */
    createdBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {ArticleCoverRelatedInner}
     * @memberof ArticleLocalizationsInnerCover
     */
    updatedBy?: ArticleCoverRelatedInner;
    /**
     * 
     * @type {string}
     * @memberof ArticleLocalizationsInnerCover
     */
    locale?: string;
    /**
     * 
     * @type {Array<ArticleCoverRelatedInner>}
     * @memberof ArticleLocalizationsInnerCover
     */
    localizations?: Array<ArticleCoverRelatedInner>;
}

/**
 * Check if a given object implements the ArticleLocalizationsInnerCover interface.
 */
export function instanceOfArticleLocalizationsInnerCover(value: object): value is ArticleLocalizationsInnerCover {
    return true;
}

export function ArticleLocalizationsInnerCoverFromJSON(json: any): ArticleLocalizationsInnerCover {
    return ArticleLocalizationsInnerCoverFromJSONTyped(json, false);
}

export function ArticleLocalizationsInnerCoverFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleLocalizationsInnerCover {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'documentId': json['documentId'] == null ? undefined : json['documentId'],
        'name': json['name'] == null ? undefined : json['name'],
        'alternativeText': json['alternativeText'] == null ? undefined : json['alternativeText'],
        'caption': json['caption'] == null ? undefined : json['caption'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
        'formats': json['formats'] == null ? undefined : json['formats'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'ext': json['ext'] == null ? undefined : json['ext'],
        'mime': json['mime'] == null ? undefined : json['mime'],
        'size': json['size'] == null ? undefined : json['size'],
        'url': json['url'] == null ? undefined : json['url'],
        'previewUrl': json['previewUrl'] == null ? undefined : json['previewUrl'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'providerMetadata': json['provider_metadata'] == null ? undefined : json['provider_metadata'],
        'related': json['related'] == null ? undefined : ((json['related'] as Array<any>).map(ArticleCoverRelatedInnerFromJSON)),
        'folder': json['folder'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['folder']),
        'folderPath': json['folderPath'] == null ? undefined : json['folderPath'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'publishedAt': json['publishedAt'] == null ? undefined : (new Date(json['publishedAt'])),
        'createdBy': json['createdBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['createdBy']),
        'updatedBy': json['updatedBy'] == null ? undefined : ArticleCoverRelatedInnerFromJSON(json['updatedBy']),
        'locale': json['locale'] == null ? undefined : json['locale'],
        'localizations': json['localizations'] == null ? undefined : ((json['localizations'] as Array<any>).map(ArticleCoverRelatedInnerFromJSON)),
    };
}

export function ArticleLocalizationsInnerCoverToJSON(json: any): ArticleLocalizationsInnerCover {
    return ArticleLocalizationsInnerCoverToJSONTyped(json, false);
}

export function ArticleLocalizationsInnerCoverToJSONTyped(value?: ArticleLocalizationsInnerCover | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentId': value['documentId'],
        'name': value['name'],
        'alternativeText': value['alternativeText'],
        'caption': value['caption'],
        'width': value['width'],
        'height': value['height'],
        'formats': value['formats'],
        'hash': value['hash'],
        'ext': value['ext'],
        'mime': value['mime'],
        'size': value['size'],
        'url': value['url'],
        'previewUrl': value['previewUrl'],
        'provider': value['provider'],
        'provider_metadata': value['providerMetadata'],
        'related': value['related'] == null ? undefined : ((value['related'] as Array<any>).map(ArticleCoverRelatedInnerToJSON)),
        'folder': ArticleCoverRelatedInnerToJSON(value['folder']),
        'folderPath': value['folderPath'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'publishedAt': value['publishedAt'] == null ? undefined : ((value['publishedAt']).toISOString()),
        'createdBy': ArticleCoverRelatedInnerToJSON(value['createdBy']),
        'updatedBy': ArticleCoverRelatedInnerToJSON(value['updatedBy']),
        'locale': value['locale'],
        'localizations': value['localizations'] == null ? undefined : ((value['localizations'] as Array<any>).map(ArticleCoverRelatedInnerToJSON)),
    };
}

