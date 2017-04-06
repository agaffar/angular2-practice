/**
 * Created by SB004 on 4/6/2017.
 */
import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name : "MyFilter"
})

export class MyFilter implements PipeTransform{
  firstName : any;
  lastName : any;
  address : any;
  transform(value : any, args1 : any,args2 : any,args3 : any) : any {
    // ES6 array destructuring

    //if(args1 == undefined)
    if(args1 || args2 || args3){
      let avoider = "@#@"
      if(args1)
      this.firstName = args1;
      else
        this.firstName = avoider;

      if(args2)
        this.lastName = args2;
      else
        this.lastName = avoider;
      if(args3)
        this.address = args3;
      else
        this.address = avoider;
      return value.filter(user =>   {
        let regFName = new RegExp(this.firstName,"ig");
        let regLName = new RegExp(this.lastName,"ig");
        let regAdd = new RegExp(this.address,"ig");
        if(regFName.test(user.firstName)||regLName.test(user.lastName))
          return true;
        else
          return false;
      });
    }
    else{
      return value;
    }

  }


}
