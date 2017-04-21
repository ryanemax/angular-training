import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  authHeaders = new Headers()
  hostURL = "http://host.cloud.anasit.com:8001/parse/"

  constructor(public http: Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev.cloud")
    this.authHeaders.append("X-Parse-Master-Key","angularionic")
    this.authHeaders.append("Content-Type","application/json; charset=utf-8")
  }

  saveClass(className,object){
    let url = this.hostURL+ "classes/"+className
    return this.http.post(url,object,{
      headers:this.authHeaders
    }).toPromise()
  }

  findClasses(className){
    let url = this.hostURL+ "classes/"+className
    return this.http.get(url,{
      headers:this.authHeaders
    }).toPromise()
  }

  findClassById(className,objectId){
    let url = `${this.hostURL}classes/${className}/${objectId}`
    return this.http.get(url,{
      headers:this.authHeaders
    }).toPromise()
  }

  login(user){

  }


}
