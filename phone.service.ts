import {Contact} from './phone'
export class ContactService{
    csarray:Contact[];
    constructor(){
        this.csarray=[];
        var c1,c2;
        c1=new Contact();
        c1.name="Raju";
        c1.phone=987652431;
        this.csarray.push(c1); 
        c2=new Contact();
        c2.name="Raj";
        c2.phone=982635412;
        this.csarray.push(c2);     
    }
    showcontact(){
        return this.csarray;
    }
    addcontact(c:Contact){
        this.csarray.push(c);
    }
}