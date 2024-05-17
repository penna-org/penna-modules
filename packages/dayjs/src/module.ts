import { addPlugin, createResolver, definePennaModule } from '@pennajs/kit'

export default definePennaModule({
  meta: {
    name: 'penna-dayjs',
  },
  setup() {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./dayjs'))
  },
})
