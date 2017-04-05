/**
 * Created by SB004 on 4/5/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {ClientEndPoint} from './../../common/request/ClientEndPoint';


@Injectable()
export class QueryApi {

  constructor(private http: Http) {
  }

  doGet(url: string, params: any) {
    url = ClientEndPoint(url, params);
    return this.http.get(url, params );
  }


}
