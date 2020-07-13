import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Response {
  result: string;
  error: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})

export class MapinfoService {
  controller = 'https://alw-lab.herokuapp.com';

  constructor( private http: HttpClient) { }

  findGetParameter(parameterName) {
    let result = null;
    let    tmp = [];
    const items = location.search.substr(1).split('&');
    
    for (const item of items) {
        tmp = item.split('=');
        if (tmp[0] === parameterName) {
          result = decodeURIComponent(tmp[1]);
        }
    }
    return result;
  }

  public request(options) {
    const params = this.toUrlEncoded(options.params);
    return this.http.get<Response>(`${this.controller}/${options.action}`);
  }


  public toUrlEncoded(object: any) {

    if (!object) {
      return '';
    }

    const keys  = Object.keys(object);
    const pairs = [];

    for (const key of keys) {
      const value = encodeURIComponent(object[key]);
      pairs.push(`${key}=${value}`);
    }

    return pairs.join('&');
  } 

  public infometodo(){
     return this.request({action:'commerces'}).pipe(map((response) => {
       return response;
     }))
  }
}
