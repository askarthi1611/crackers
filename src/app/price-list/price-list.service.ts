import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PriceListService {
data:any=[]
  constructor(private http: HttpClient) { }
  
  validuser(user:any){
    if (user.user == '' ||user.mobile == '') {
      return false
    }else{
      this.create(user)
      return true
    }
  }
  create(user:any){
    let headers :any = new Headers()
    headers.append('Content-Type', 'application/json')
    this.http.post("https://sk-unhm.onrender.com/register",user,{headers:headers})
.subscribe(data => {
  console.log(data);
});
}
fetchData() {
  let headers :any = new Headers()
  headers.append('Content-Type', 'application/json')
  this.http.get('https://sk-unhm.onrender.com/reg', {headers:headers}).pipe()
  .subscribe((data: any) => {
    setTimeout(() => {
      this.data=data;
      return data;
    }, 1000);
  });
  }
  ipinfo(ipinfo:any){
    let headers :any = new Headers()
    headers.append('Content-Type', 'application/json')
    this.http.post("https://sk-unhm.onrender.com/ipinfo",ipinfo,{headers:headers})
.subscribe(data => {
  console.log(data);
});
  }
}
