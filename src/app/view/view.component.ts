import { ContactserviceService } from './../contactservice.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
carray :Contact[];
search:String="";
test:String="";
  constructor(public conservice:ContactserviceService) {
    this.carray=conservice.getContacts();
   }

  ngOnInit(): void {
  }
  removeContact(a:Contact){
   
    this.conservice.removeContact(a);
    }

  }


