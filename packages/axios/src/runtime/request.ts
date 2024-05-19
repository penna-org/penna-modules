import type { CreateAxiosDefaults } from 'axios'
import type { Plugin } from 'vue'
import axios from 'axios'
import { requestInstance } from './instance.ts'

export function createRequest(options: CreateAxiosDefaults) {
  const request = axios.create({
    ...options
  })
  // 合并参数
  Object.assign(requestInstance, request)

  return {
    install(app) {
      app.config.globalProperties.$http = request
    }
  } as Plugin
}
