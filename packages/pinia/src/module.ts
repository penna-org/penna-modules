import { addEntryFile, addImportPreset, createResolver, definePennaModule } from '@pennajs/kit'

export default definePennaModule({
  meta: {
    name: 'penna-pinia',
    configKey: 'pinia',
  },
  setup() {
    const resolver = createResolver(import.meta.url)
    addImportPreset('pinia')
    addEntryFile(resolver.resolve('./entry'))
  },
})
