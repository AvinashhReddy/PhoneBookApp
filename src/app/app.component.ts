import { ContactserviceService } from './contactservice.service';
import { Contact } from './contact';
import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-bootstrap-modal-demo';
 fname:String;
 lname:String;
 pnum:number;
 
  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(
    private modalService: NgbModal,public conservice:ContactserviceService
  ){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }
  
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  m1(){
   
    const a =new Contact()
   a.firstName=this.fname;
   a.lastName=this.lname;
   a.phone=this.pnum;
this.conservice.addContact(a)
    
  }
 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}