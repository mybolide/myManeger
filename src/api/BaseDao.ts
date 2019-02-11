import request from '@/utils/request'



class BaseDao {
  private _urls: any = {}
  
  
 constructor(_urls: any) {
   this._urls = _urls
 }

  pageQuery(params:any = {}){
    params.pageSize = 20
    return request({
      url: this._urls.page,
      method: 'get',
      params
    })
  }
}