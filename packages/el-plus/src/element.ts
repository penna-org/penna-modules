import { definePennaPlugin } from '@pennajs/kit'

export default definePennaPlugin({
  name: 'penna-el-plus',
  vitePlugins: [
    {
      name: 'penna:el-plus',
      config() {
        return {
          resolve: {
            alias: [
              {
                find: /^(element-plus)(?!\/(es|dist|theme-chalk))/,
                replacement: 'element-plus/es',
              },
            ]
          }
        }
      },
    }
  ]
})
