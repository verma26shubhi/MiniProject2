import { Component, OnInit } from '@angular/core';
import {Contact} from './phone';
import {ContactService} from './phone.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  contact:Contact;
  contacts:Contact[];
  sortedcontacts:Contact[];
  searchedcontacts:Contact[];
  constructor(private cs:ContactService) {
    this.contact=new Contact();
    this.contacts=this.cs.showcontact();
   }

  ngOnInit(): void {
  }

  displaycontact(){
    this.cs.addcontact(this.contact)
  }
  sortcontact(){
    this.sortedcontacts=[];
    var c1:Contact;
    for (let i = 0; i < this.contacts.length; i++) {
      for (let j = 0; j < this.contacts.length-1; j++) {
        c1=new Contact();
        if(this.contacts[j].name>this.contacts[j+1].name){
          c1=this.contacts[j+1];
          this.contacts[j+1]=this.contacts[j];
          this.contacts[j]=c1;
        }
      }
    }
    for (let index = 0; index < this.contacts.length; index++) {
      this.sortedcontacts[index]=this.contacts[index];
    }
  }
  deletecontact(ct:Contact){
    for(let i=0;i<this.contacts.length;i++){
      if(this.contacts[i].name==ct.name){
        this.contacts[i]=null;
      }
    }
  }
  findcontact(n:string){
    this.searchedcontacts=[];
    for (let index = 0; index < this.contacts.length; index++) {
      if(n==this.contacts[index].name){
          this.searchedcontacts.push(this.contacts[index]);
      }
    }
  }
}
