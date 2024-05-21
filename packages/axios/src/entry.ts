import { definePennaEntry, usePenna } from 'penna'
import type { AxiosDefaults } from 'axios'
import { createRequest } from './runtime'
import { requestGuard } from './runtime/request-guard.ts'

export default definePennaEntry({
  async setup() {
    const penna = usePenna()
    const options = {
      withCredentials: true,
      timeout: 60000,
    } as AxiosDefaults
    await penna.callHook('axios:options', options)
    const request = createRequest(options)
    requestGuard(request.request)
    await penna.callHook('axios:ready', request.request)
    penna.hook('app:install', (app) => {
      app.use(request)
    })
  },
})
