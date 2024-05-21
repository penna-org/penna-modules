import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

export interface InternalRequestConfig<T = any> extends InternalAxiosRequestConfig<T> {

}

export interface RequestConfig<D = any> extends AxiosRequestConfig<D> {}
