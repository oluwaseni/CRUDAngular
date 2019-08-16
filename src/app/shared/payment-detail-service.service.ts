import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailServiceService {

  formData?: any ={}
  readonly rootURL = "http://localhost:51404/api"; 
  
  // CardOwnerName={}  
  list: PaymentDetail[];

  constructor(private http : HttpClient) { }

  postPaymentDetail(){

    return this.http.post(this.rootURL+'/EmployeeModels',this.formData);

  }
  putPaymentDetail(){

    return this.http.put(this.rootURL+'/EmployeeModels/'+this.formData.CardId,this.formData);

  }
  deletePaymentDetail(id){

    return this.http.delete(this.rootURL+'/EmployeeModels/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/EmployeeModels/')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
