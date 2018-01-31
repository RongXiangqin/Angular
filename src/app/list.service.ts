import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
// import { HttpModule }    from '@angular/http';

import { List } from './list';
@Injectable()
export class ListService {
constructor(private  http:Http) { }
// 获取数据
getList(): Promise<List[]> {
  return this.http.get('/api/getlist')
             .toPromise()
             .then(response => response.json().data as List[])
             .catch(this.handleError);
}
 // 提交数据
postList(data): Promise<List> {
  return this.http
    .post('/api/list', data)
    .toPromise()
    .then(res => res.json().data as List)
    .catch(this.handleError);
}
// 获取时间
getTimer(): Promise<List[]> {
  return this.http.get('/api/getTime')
             .toPromise()
             .then(response => response.json().time3)
             .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}