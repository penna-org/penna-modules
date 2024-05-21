import type { AxiosDefaults, AxiosInstance, AxiosResponse } from 'axios'

export {}
declare module 'penna'{
  import type { HookResult } from 'penna'

  interface PennaHooks {
    'axios:options': (options: AxiosDefaults) => HookResult
    'axios:ready': (request: AxiosInstance) => HookResult
    'axios:request-before': (config) => HookResult
    'axios:request': (config: any) => HookResult
    'axios:request-error': (error: any) => HookResult
    'axios:response': (response: AxiosResponse) => HookResult
    'axios:response-error': (error: any) => HookResult
  }
}

declare module '@pennajs/kit'{
  interface PennaMiddlewareHandle {
    'axios:request': (config: any) => any
    'axios:request-error': (error: any) => any
    'axios:response': (response: AxiosResponse) => any
    'axios:response-error': (error: any) => any
  }
}
