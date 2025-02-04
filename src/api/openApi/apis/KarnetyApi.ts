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


import * as runtime from '../runtime';
import type {
  KarnetyListResponse,
  KarnetyRequest,
  KarnetyResponse,
} from '../models/index';
import {
    KarnetyListResponseFromJSON,
    KarnetyListResponseToJSON,
    KarnetyRequestFromJSON,
    KarnetyRequestToJSON,
    KarnetyResponseFromJSON,
    KarnetyResponseToJSON,
} from '../models/index';

export interface DeleteKarnetiesIdRequest {
    id: number;
}

export interface GetKarnetiesRequest {
    sort?: string;
    paginationWithCount?: boolean;
    paginationPage?: number;
    paginationPageSize?: number;
    paginationStart?: number;
    paginationLimit?: number;
    fields?: string;
    populate?: string;
    filters?: { [key: string]: any; };
    locale?: string;
}

export interface GetKarnetiesIdRequest {
    id: number;
}

export interface PostKarnetiesRequest {
    karnetyRequest: KarnetyRequest;
}

export interface PutKarnetiesIdRequest {
    id: number;
    karnetyRequest: KarnetyRequest;
}

/**
 * 
 */
export class KarnetyApi extends runtime.BaseAPI {

    /**
     */
    async deleteKarnetiesIdRaw(requestParameters: DeleteKarnetiesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteKarnetiesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/karneties/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async deleteKarnetiesId(requestParameters: DeleteKarnetiesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.deleteKarnetiesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getKarnetiesRaw(requestParameters: GetKarnetiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KarnetyListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['paginationWithCount'] != null) {
            queryParameters['pagination[withCount]'] = requestParameters['paginationWithCount'];
        }

        if (requestParameters['paginationPage'] != null) {
            queryParameters['pagination[page]'] = requestParameters['paginationPage'];
        }

        if (requestParameters['paginationPageSize'] != null) {
            queryParameters['pagination[pageSize]'] = requestParameters['paginationPageSize'];
        }

        if (requestParameters['paginationStart'] != null) {
            queryParameters['pagination[start]'] = requestParameters['paginationStart'];
        }

        if (requestParameters['paginationLimit'] != null) {
            queryParameters['pagination[limit]'] = requestParameters['paginationLimit'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        if (requestParameters['locale'] != null) {
            queryParameters['locale'] = requestParameters['locale'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/karneties`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KarnetyListResponseFromJSON(jsonValue));
    }

    /**
     */
    async getKarneties(requestParameters: GetKarnetiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KarnetyListResponse> {
        const response = await this.getKarnetiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getKarnetiesIdRaw(requestParameters: GetKarnetiesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KarnetyResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getKarnetiesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/karneties/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KarnetyResponseFromJSON(jsonValue));
    }

    /**
     */
    async getKarnetiesId(requestParameters: GetKarnetiesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KarnetyResponse> {
        const response = await this.getKarnetiesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async postKarnetiesRaw(requestParameters: PostKarnetiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KarnetyResponse>> {
        if (requestParameters['karnetyRequest'] == null) {
            throw new runtime.RequiredError(
                'karnetyRequest',
                'Required parameter "karnetyRequest" was null or undefined when calling postKarneties().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/karneties`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: KarnetyRequestToJSON(requestParameters['karnetyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KarnetyResponseFromJSON(jsonValue));
    }

    /**
     */
    async postKarneties(requestParameters: PostKarnetiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KarnetyResponse> {
        const response = await this.postKarnetiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async putKarnetiesIdRaw(requestParameters: PutKarnetiesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KarnetyResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling putKarnetiesId().'
            );
        }

        if (requestParameters['karnetyRequest'] == null) {
            throw new runtime.RequiredError(
                'karnetyRequest',
                'Required parameter "karnetyRequest" was null or undefined when calling putKarnetiesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/karneties/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: KarnetyRequestToJSON(requestParameters['karnetyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KarnetyResponseFromJSON(jsonValue));
    }

    /**
     */
    async putKarnetiesId(requestParameters: PutKarnetiesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KarnetyResponse> {
        const response = await this.putKarnetiesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
