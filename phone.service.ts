import {Contact} from './phone'
export class ContactService{
    csarray:Contact[];
    constructor(){
        this.csarray=[];
        var c1,c2;
        c1=new Contact();
        c1.name="Shubhi";
        c1.phone=9876533331;
        this.csarray.push(c1); 
        c2=new Contact();
        c2.name="Shashank";
        c2.phone=982631112;
        this.csarray.push(c2);     
    }
    showcontact(){
        return this.csarray;
    }
    addcontact(c:Contact){
        this.csarray.push(c);
    }
}
