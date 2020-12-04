import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  contacts :Contact[]=[
{
  'firstName':'Avinash',
  'lastName':'Reddy',
  'phone': 9876543210
},
{
  'firstName':'Sourav ',
   'lastName':'Hole',
  'phone': 9876345210
},
{
  'firstName':'Ayush',
  'lastName':'Martin',
  'phone': 9876543123
},
{
  'firstName':'Manish',
  'lastName':'Panjirey',
  'phone': 9870123456
},
{
  'firstName':'Giridhar',
  'lastName':'Gabbur',
  'phone': 9765432108
},


  ]
   
  constructor() { }
  addContact(c:Contact){
    this.contacts.push(c);
  }
  getContacts(){
    return this.contacts
  }
  removeContact(c:Contact){
    let index=this.contacts.indexOf(c);
    if(index!=-1){
      this.contacts.splice(index,1);
  }

}}
