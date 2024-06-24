import { addComponent, createResolver, definePennaModule } from '@pennajs/kit'

export default definePennaModule({
  meta: {
    name: 'penna-image',
  },
  setup() {
    const resolver = createResolver(import.meta.url)
    addComponent('PImage', resolver.resolve('./runtime/image.vue'))
  },
})
