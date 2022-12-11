import { Component, OnInit } from '@angular/core';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {CallNumber} from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit
 { 
   directorNum: string="+6798624312";
   managerNum: string="+6797398677";
   infoNum: string="+6798624312";
   
  
constructor(public composer:EmailComposer, private call:CallNumber)
{

}

openEmailComposer()
{
  this.composer.open({
    to:'manager@winisvege.com'
    
  })
}
callDirector()
{
  this.call.callNumber(this.directorNum, true);
}

callManager()
{
  this.call.callNumber(this.managerNum,true);
}

callInfo()
{
  this.call.callNumber(this.infoNum,true);
}



  ngOnInit() {
  }

}
