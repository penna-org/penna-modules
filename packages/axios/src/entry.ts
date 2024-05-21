import { definePennaEntry } from 'penna'
import type { AxiosDefaults } from 'axios'
import { createRequest } from './runtime'

export default definePennaEntry({
  async setup(penna) {
    const options = {
      withCredentials: true,
      timeout: 60000,
    } as AxiosDefaults
    await penna.callHook('request:options', options)
    const request = createRequest(options)
    await penna.callHook('request:ready', request.request)
    penna.hook('app:install', (app) => {
      app.use(request)
    })
  },
})
