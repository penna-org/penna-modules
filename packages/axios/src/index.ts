import { definePennaMiddleware } from '@pennajs/kit/app'
import type { AxiosResponse } from 'axios'
import { createRequest } from './runtime'
import type { InternalRequestConfig, RequestConfig } from './runtime/typing.ts'

export {
  createRequest
}

export type {
  InternalRequestConfig,
  RequestConfig
}

export type HandleError = (error: any) => Promise<any>
export type HandleAxiosRequest = (config: InternalRequestConfig) => InternalRequestConfig
export type HandleAxiosResponse = (response: AxiosResponse) => any

export function defineAxiosRequestMiddleware(fn: HandleAxiosRequest) {
  return definePennaMiddleware('axios:request', fn)
}

export function defineAxiosRespsonseMiddleware(fn: HandleAxiosResponse) {
  return definePennaMiddleware('axios:response', fn)
}

export function defineAxiosRequestErrorMiddleware(fn: HandleError) {
  return definePennaMiddleware('axios:request-error', fn)
}

export function defineAxiosResponseErrorMiddleware(fn: HandleError) {
  return definePennaMiddleware('axios:response-error', fn)
}
