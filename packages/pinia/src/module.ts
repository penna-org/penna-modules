import { addEntryFile, createResolver, definePennaModule } from '@pennajs/kit'

export default definePennaModule({
  meta: {
    name: 'penna-pinia',
    configKey: 'pinia',
  },
  setup() {
    const resolver = createResolver(import.meta.url)
    addEntryFile(resolver.resolve('./entry'))
  },
})
