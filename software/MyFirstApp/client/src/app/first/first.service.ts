/**
 * Created by SB004 on 4/5/2017.
 */
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

//import { Staff } from './staff.model';
import { environment } from '../../environments/environment';
//import { RequestUtils } from '../common/request/RequestUtils';
import { QueryApi } from '../common/request/QueryApi';

@Injectable()
export class FirstService {

  constructor(private http: Http, private queryApi: QueryApi, private router: Router) { }

  /**
   * Return Staff object by getting Id
   * @param params
   * @returns Complete Staff object
   */

  getSearchedData( params ): Observable<any> {
    //const requestOptions = RequestUtils.getRequestOptions(params);
    return this.queryApi.doGet('First', params)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }



}

