import { addEntryFile, addImport, createResolver, definePennaModule } from '@pennajs/kit'

export default definePennaModule({
  meta: {
    name: 'penna-axios',
    configKey: 'axios'
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)
    addEntryFile(resolver.resolve('./entry'))
    addImport('@pennajs/axios', [
      'useRequest'
    ])
  },
})
