// ng
import { HttpHeaders, HttpParams } from '@angular/common/http';
// npm
import { Observable } from 'rxjs';
// models
import { IFlatObject, IStrObject } from '@models/common.model';

export interface IReqOptions {
  headers: HttpHeaders;
  body?: any;
  params?: HttpParams;
}

export type TAuthorizedMethods =
  | 'delete'
  | 'get'
  | 'head'
  | 'jsonp'
  | 'options'
  | 'post'
  | 'put'
  | 'patch';
export enum EMethods {
  delete = 'DELETE',
  get = 'GET',
  head = 'HEAD',
  jsonp = 'JSONP',
  options = 'OPTIONS'
}
export enum EMethodsWithBody {
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH'
}

export interface IReqParams {
  headers?: IStrObject;
  url: string;
  queryParams?: IStrObject;
  apiEnv?: string;
  retryOptions?: IRetryReqOptions;
}

export interface IReqParamsWithBody<T> extends IReqParams {
  body: T;
}

export interface IRetryReqOptions {
  maxRetryAttempts?: number;
  scalingDuration?: number;
  statusCodes?: number[];
  requestToWait?: Observable<IFlatObject>;
}
