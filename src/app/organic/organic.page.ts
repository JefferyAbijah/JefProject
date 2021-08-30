import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-organic',
  templateUrl: './organic.page.html',
  styleUrls: ['./organic.page.scss'],
})
export class OrganicPage {

  constructor() 
  {

   }

   OpenOrganic()
   {
     window.open('https://www.scsglobalservices.com/services/organic-certification');
   }



  }
