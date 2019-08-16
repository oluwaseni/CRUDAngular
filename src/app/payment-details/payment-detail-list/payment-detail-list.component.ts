import { Component, OnInit } from '@angular/core';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service : PaymentDetailServiceService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList()
  }

  populateForm(pd: PaymentDetail){
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(CardId){
    if(confirm('Are you sure you want to delete this record?')){
      this.service.deletePaymentDetail(CardId)
    .subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning("Deleted Successfully", "Payment Detail Register");
      },
      err =>{
        console.log(err);
      });
    }
    
    }

  }
