import { definePennaMiddleware } from '@pennajs/kit/app'
import type { AxiosResponse } from 'axios'
import { createRequest } from './runtime'
import type { InternalRequestConfig } from './runtime/typing.ts'

export {
  useRequest
} from './runtime'

export {
  createRequest
}

export type HandleError = (error: any) => Promise<any>
export type HandleAxiosRequest = (config: InternalRequestConfig) => InternalRequestConfig | Promise<InternalRequestConfig>
export type HandleAxiosResponse = (response: AxiosResponse) => any | Promise<any>

export function defineAxiosRequestMiddleware(fn: HandleAxiosRequest) {
  return definePennaMiddleware('axios:request', fn)
}

export function defineAxiosResponseMiddleware(fn: HandleAxiosResponse) {
  return definePennaMiddleware('axios:response', fn)
}

export function defineAxiosRequestErrorMiddleware(fn: HandleError) {
  return definePennaMiddleware('axios:request-error', fn)
}

export function defineAxiosResponseErrorMiddleware(fn: HandleError) {
  return definePennaMiddleware('axios:response-error', fn)
}
