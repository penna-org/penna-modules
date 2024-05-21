import type { AxiosInstance } from 'axios'

export {}
declare module 'penna'{
  import type { HookResult } from 'penna'
  import type { AxiosDefaults } from 'axios'

  interface PennaHooks {
    'request:options': (options: AxiosDefaults) => HookResult
    'request:ready': (request: AxiosInstance) => HookResult
    'request:before': () => HookResult
    'request:before-error': () => HookResult
    'request:after': () => HookResult
    'request:after-error': () => HookResult
  }
}

declare module '@pennajs/kit'{
  interface PennaMiddlewareHandle {
    'request:before': () => any
    'request:before-error': () => any
    'request:after': () => any
    'request:after-error': () => any
  }
}
