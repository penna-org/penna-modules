import type { AxiosInstance } from 'axios'
import { usePenna } from '@pennajs/kit/app'
import type { InternalRequestConfig } from './typing.ts'
import middlewares from '#modules/middlewares'

export function requestGuard(instance: AxiosInstance) {
  instance.interceptors.request.use(
    // 请求配置
    async (config: InternalRequestConfig) => {
      const penna = usePenna()
      const requestMiddlewares = middlewares.filter(v => v.name === 'axios:request').map(v => v.handle)
      let _config = config
      if (requestMiddlewares.length) {
        for (const requestMiddleware of requestMiddlewares)
          _config = await (requestMiddleware as any)?.(_config) ?? _config
      }

      await penna.callHook('axios:request', _config)
      return _config
    },
    async (error) => {
      const penna = usePenna()
      const requestMiddlewares = middlewares.filter(v => v.name === 'axios:request-error').map(v => v.handle)
      let _error = error
      if (requestMiddlewares.length) {
        for (const requestMiddleware of requestMiddlewares)
          _error = await (requestMiddleware as any)?.(_error) ?? _error
      }
      await penna.callHook('axios:request-error', _error)
      return Promise.reject(_error)
    }
  )

  instance.interceptors.response.use(
    async (response) => {
      const penna = usePenna()
      let _response = response
      const responseMiddlewares = middlewares.filter(v => v.name === 'axios:response').map(v => v.handle)
      if (responseMiddlewares.length) {
        for (const responseMiddleware of responseMiddlewares)
          _response = await (responseMiddleware as any)?.(_response) ?? _response
      }
      await penna.callHook('axios:response', _response)
      return _response
    },
    async (error) => {
      const penna = usePenna()
      const responseMiddlewares = middlewares.filter(v => v.name === 'axios:response-error').map(v => v.handle)
      let _error = error
      if (responseMiddlewares.length) {
        for (const responseMiddleware of responseMiddlewares)
          _error = await (responseMiddleware as any)?.(_error) ?? _error
      }
      await penna.callHook('axios:response-error', _error)
      return Promise.reject(_error)
    }
  )
}
