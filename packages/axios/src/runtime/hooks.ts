import type { AxiosResponse } from 'axios'
import { requestInstance } from './instance.ts'
import type { RequestConfig } from './typing.ts'

export function useRequest<R = any, D = any, Response = AxiosResponse<R>>(config: RequestConfig<D>) {
  if (!requestInstance.request)
    throw new Error('requestInstance.request is not defined')

  return requestInstance.request<R, Response>(config)
}
