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
  ZajeciaGrupoweRequest,
  ZajeciaGrupoweResponse,
} from '../models/index';
import {
    ZajeciaGrupoweRequestFromJSON,
    ZajeciaGrupoweRequestToJSON,
    ZajeciaGrupoweResponseFromJSON,
    ZajeciaGrupoweResponseToJSON,
} from '../models/index';

export interface GetZajeciaGrupoweRequest {
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

export interface PutZajeciaGrupoweRequest {
    zajeciaGrupoweRequest: ZajeciaGrupoweRequest;
}

/**
 * 
 */
export class ZajeciaGrupoweApi extends runtime.BaseAPI {

    /**
     */
    async deleteZajeciaGrupoweRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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
            path: `/zajecia-grupowe`,
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
    async deleteZajeciaGrupowe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.deleteZajeciaGrupoweRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getZajeciaGrupoweRaw(requestParameters: GetZajeciaGrupoweRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ZajeciaGrupoweResponse>> {
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
            path: `/zajecia-grupowe`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ZajeciaGrupoweResponseFromJSON(jsonValue));
    }

    /**
     */
    async getZajeciaGrupowe(requestParameters: GetZajeciaGrupoweRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ZajeciaGrupoweResponse> {
        const response = await this.getZajeciaGrupoweRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async putZajeciaGrupoweRaw(requestParameters: PutZajeciaGrupoweRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ZajeciaGrupoweResponse>> {
        if (requestParameters['zajeciaGrupoweRequest'] == null) {
            throw new runtime.RequiredError(
                'zajeciaGrupoweRequest',
                'Required parameter "zajeciaGrupoweRequest" was null or undefined when calling putZajeciaGrupowe().'
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
            path: `/zajecia-grupowe`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ZajeciaGrupoweRequestToJSON(requestParameters['zajeciaGrupoweRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ZajeciaGrupoweResponseFromJSON(jsonValue));
    }

    /**
     */
    async putZajeciaGrupowe(requestParameters: PutZajeciaGrupoweRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ZajeciaGrupoweResponse> {
        const response = await this.putZajeciaGrupoweRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
