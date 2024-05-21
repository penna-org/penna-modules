import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

export interface InternalRequestConfig<T = any> extends InternalAxiosRequestConfig<T> {

}

export function requestGuard(instance: AxiosInstance) {
  instance.interceptors.request.use(
    // 请求配置
    (config: InternalRequestConfig) => {
      return config
    },
    () => {

    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    () => {

    }
  )
}
