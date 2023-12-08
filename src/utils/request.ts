import axios from 'axios'
import type {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig
} from 'axios'

import url from '@/config/url'

const base = url.acg

class HttpRequest {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: base,
      timeout: 5 * 1000
    })

    // add a request interceptor
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        console.log('%c 🍫 requestError', 'color:#b03734', error)
        return Promise.reject(error)
      }
    )

    // add a response interceptor
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.status === 200) {
          return response.data
        }
      },
      (error: AxiosError) => {
        console.log('%c 🍎 responseError', 'color:#93c0a4', error)
        return Promise.reject(error)
      }
    )
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      try {
        this.instance
          .request(config)
          .then((res: AxiosResponse) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      } catch (err) {
        return Promise.reject(err)
      }
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ method: 'GET', ...config }) as Promise<T>
  }

  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ method: 'POST', ...config }) as Promise<T>
  }

  put<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ method: 'PUT', ...config }) as Promise<T>
  }

  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ method: 'DELETE', ...config }) as Promise<T>
  }
}

const request = new HttpRequest()
export default request
