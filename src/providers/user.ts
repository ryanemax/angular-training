import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  authHeaders = new Headers()
  hostURL = "http://host.cloud.anasit.com:8001/parse/"

  constructor(public http: Http,public toastCtrl:ToastController) {
    this.authHeaders.append("X-Parse-Application-Id","dev.cloud")
    this.authHeaders.append("X-Parse-Master-Key","angularionic")
    // this.authHeaders.append("X-Parse-Session-Token","r:059bbbebdc201de090f16fe9716b43bf")
    this.authHeaders.append("Content-Type","application/json; charset=utf-8")
  }

  saveClass(className,object){
    let url = this.hostURL+ "classes/"+className
    return this.http.post(url,object,{
      headers:this.authHeaders
    }).toPromise().catch(err=>{
      console.log(err)
      let opts = {
        message:err.json().error,
        duration: 2000
      }
      let errNotify = this.toastCtrl.create(opts)
      errNotify.present()
    })
  }

  updateClass(className,objectId,object){
    let url = `${this.hostURL}classes/${className}/${objectId}`
    return this.http.put(url,object,{
      headers:this.authHeaders
    }).toPromise().catch(err=>{
      console.log(err)
      let opts = {
        message:err.json().error,
        duration: 2000
      }
      let errNotify = this.toastCtrl.create(opts)
      errNotify.present()
    })
  }

  deleteClassById(className,objectId){
    let url = `${this.hostURL}classes/${className}/${objectId}`
    return this.http.delete(url,{
      headers:this.authHeaders
    }).toPromise().catch(err=>{
      console.log(err)
      let opts = {
        message:err.json().error,
        duration: 2000
      }
      let errNotify = this.toastCtrl.create(opts)
      errNotify.present()
    })
  }

  findClassesRxJS(className,opts?){
    let url = this.hostURL+ "classes/"+className
    return this.http.get(url,{
      headers:this.authHeaders
    })
    // .catch(err=>{
    //   console.log(err)
    //   let opts = {
    //     message:err.json().error,
    //     duration: 2000
    //   }
    //   let errNotify = this.toastCtrl.create(opts)
    //   errNotify.present()
    // })
  }

  findClasses(className,opts?){
    let url = this.hostURL+ "classes/"+className
    return this.http.get(url,{
      headers:this.authHeaders
    }).toPromise().catch(err=>{
      console.log(err)
      let opts = {
        message:err.json().error,
        duration: 2000
      }
      let errNotify = this.toastCtrl.create(opts)
      errNotify.present()
    })
  }

  findClassById(className,objectId){
    let url = `${this.hostURL}classes/${className}/${objectId}`
    return this.http.get(url,{
      headers:this.authHeaders
    }).toPromise().catch(err=>{
      console.log(err)
      let opts = {
        message:err.json().error,
        duration: 2000
      }
      let errNotify = this.toastCtrl.create(opts)
      errNotify.present()
    })
  }

  login(user){
    let loginHeader = new Headers()
    loginHeader.append("X-Parse-Application-Id","dev.cloud")
    let url = this.hostURL+"login?username="+user.username+"&password="+user.password
    url = encodeURI(url)
    return  this.http.get(url,{
      headers:loginHeader
    }).toPromise().then(data=>{
        console.log(data)
    }).catch(err=>{
      console.log(err)
      let opts = {
        message:err.json().error,
        duration: 2000
      }
      let errNotify = this.toastCtrl.create(opts)
      errNotify.present()
    })
  }


}
