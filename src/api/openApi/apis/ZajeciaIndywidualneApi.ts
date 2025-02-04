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
  ZajeciaIndywidualneRequest,
  ZajeciaIndywidualneResponse,
} from '../models/index';
import {
    ZajeciaIndywidualneRequestFromJSON,
    ZajeciaIndywidualneRequestToJSON,
    ZajeciaIndywidualneResponseFromJSON,
    ZajeciaIndywidualneResponseToJSON,
} from '../models/index';

export interface GetZajeciaIndywidualneRequest {
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

export interface PutZajeciaIndywidualneRequest {
    zajeciaIndywidualneRequest: ZajeciaIndywidualneRequest;
}

/**
 * 
 */
export class ZajeciaIndywidualneApi extends runtime.BaseAPI {

    /**
     */
    async deleteZajeciaIndywidualneRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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
            path: `/zajecia-indywidualne`,
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
    async deleteZajeciaIndywidualne(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.deleteZajeciaIndywidualneRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getZajeciaIndywidualneRaw(requestParameters: GetZajeciaIndywidualneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ZajeciaIndywidualneResponse>> {
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
            path: `/zajecia-indywidualne`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ZajeciaIndywidualneResponseFromJSON(jsonValue));
    }

    /**
     */
    async getZajeciaIndywidualne(requestParameters: GetZajeciaIndywidualneRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ZajeciaIndywidualneResponse> {
        const response = await this.getZajeciaIndywidualneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async putZajeciaIndywidualneRaw(requestParameters: PutZajeciaIndywidualneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ZajeciaIndywidualneResponse>> {
        if (requestParameters['zajeciaIndywidualneRequest'] == null) {
            throw new runtime.RequiredError(
                'zajeciaIndywidualneRequest',
                'Required parameter "zajeciaIndywidualneRequest" was null or undefined when calling putZajeciaIndywidualne().'
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
            path: `/zajecia-indywidualne`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ZajeciaIndywidualneRequestToJSON(requestParameters['zajeciaIndywidualneRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ZajeciaIndywidualneResponseFromJSON(jsonValue));
    }

    /**
     */
    async putZajeciaIndywidualne(requestParameters: PutZajeciaIndywidualneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ZajeciaIndywidualneResponse> {
        const response = await this.putZajeciaIndywidualneRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
