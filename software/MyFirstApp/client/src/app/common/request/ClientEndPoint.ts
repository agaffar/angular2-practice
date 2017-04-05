/**
 * Created by SB004 on 4/5/2017.
 */
import { environment } from './../../../environments/environment';

export const First = 'First';

export const ClientEndPoint = (type: string, params: any) => {
  switch (type) {
    case First:
      let firstUrl = environment.API_ROOT + '/api/user/data';
      if ( params ) {
        firstUrl += '?q=' + JSON.stringify(params);
      }
      console.log(firstUrl)
      return firstUrl;
    default:
      return environment.API_ROOT + '/api/user/data?q={}';
  }
};
