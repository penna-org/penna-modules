import { definePennaMiddleware } from '@pennajs/kit/app'
import { createRequest } from './runtime'

export {
  createRequest
}

type HandleRequestBeforeFn = () => void

export function defineAxiosBeforeMiddleware(fn: HandleRequestBeforeFn) {
  return definePennaMiddleware('request:before', fn)
}

export function defineAxiosAfterMiddleware(fn: HandleRequestBeforeFn) {
  return definePennaMiddleware('request:after', fn)
}

export function defineAxiosAfterErrorMiddleware(fn: HandleRequestBeforeFn) {
  return definePennaMiddleware('request:after-error', fn)
}

export function defineAxiosBeforeErrorMiddleware(fn: HandleRequestBeforeFn) {
  return definePennaMiddleware('request:before-error', fn)
}
