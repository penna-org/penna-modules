# penna axios plugin

This is a plugin for penna that logs axios requests and responses.


## install

```bash

pnpm add axios @pennajs/axios

```

## usage

In `penna.config.ts` file.

```ts
import { defineConfig } from 'penna/kit'
export default defineConfig({
  module: {
    modules: [
      '@pennajs/axios/module',
    ]
  }
})
```

***useRequest***

```ts
import {useRequest} from "@pennajs/axios";

const data = useRequest({
    url:"/api",
})
```

### middleware


```ts
// request config
defineAxiosRequestMiddleware((config)=>{config})


```