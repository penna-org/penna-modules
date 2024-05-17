import { definePennaEntry } from '@pennajs/kit/app'
import { createPinia } from 'pinia'

export default definePennaEntry({
  setup(penna) {
    const pinia = createPinia()
    penna.hook('app:install', (app) => {
      app.use(pinia)
    })
  },
})
