import { definePennaPlugin } from '@pennajs/kit'

export default definePennaPlugin({
  name: 'penna-dayjs',
  vitePlugins: [
    {
      name: 'penna:dayjs',
      config() {
        return {
          resolve: {
            alias: [
              {
                find: /^dayjs\/plugin\/(.*)\.js$/,
                replacement: 'dayjs/esm/plugin/$1',
              },
              {
                find: /^dayjs\/locale/,
                replacement: 'dayjs/esm/locale',
              },
              {
                find: /^dayjs$/,
                replacement: 'dayjs/esm',
              },
            ]
          }
        }
      },
    }
  ]
})
