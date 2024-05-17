import { addPlugin, createResolver, definePennaModule } from '@pennajs/kit'

export default definePennaModule({
  meta: {
    name: 'pinia-el-plus',
  },
  setup() {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./element'))
  },
})
