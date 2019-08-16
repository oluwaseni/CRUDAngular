import { Component, OnInit } from '@angular/core';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})

export class PaymentDetailComponent implements OnInit {


  constructor(private service : PaymentDetailServiceService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){

    
    form.resetForm();
    this.service.formData = {
      CardId:0,
      Username:"",
      CardNumber: "",
      ExpirationDate:"",
      CVV:""
    }
    }
  }
  

  onSubmit(form : NgForm)
  {
    if(this.service.formData.CardId == null){
     this.insertRecord(form);
     }
    else
      //Updating the form
      this.updateRecord(form);

  }

  insertRecord(form: NgForm){

    this.service.postPaymentDetail().subscribe(
      res =>{
        // if(res != null && res != undefined)
        console.log(res);
        this.toastr.success("Submitted Successfully", "Payment Detail Register");
        this.service.refreshList();
        this.resetForm(form);
      },
      err =>
      {
        console.log(err);
      }
      
    )

  }
  updateRecord(form: NgForm){

    this.service.putPaymentDetail().subscribe(
      res =>{
        // if(res != null && res != undefined)
        this.resetForm(form);
        this.toastr.info("Updated Successfully", "Payment Detail Register");
        this.service.refreshList();
        
      },
      err =>
      {
        console.log(err);
      }
      
    )

  }

  
}
