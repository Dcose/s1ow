import request from '@/utils/request'

enum API {
  acg = '/acgimg?type=json'
}

export interface acgImgModel {
  success: boolean
  imgurl: string
  info: object
}

export const acgImgAPI = () => {
  return request.get<acgImgModel>({ url: API.acg })
}
