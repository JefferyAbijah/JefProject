import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  constructor() { }

option = {
  slidesPerView:1.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  autoplay: true,
}

tomato()
{
  window.open('https://en.wikipedia.org/wiki/Tomato');
}

dalo()
{
  window.open('https://en.wikipedia.org/wiki/Taro');
}

pine()
{
  window.open('https://en.wikipedia.org/wiki/Pineapple');
}

bergine()
{
  window.open('https://en.wikipedia.org/wiki/Eggplant');
}

kavika()
{
  window.open('https://en.wikipedia.org/wiki/Rose_apple');
}

made()
{
  window.open('https://fijianmade.gov.fj/');
}

grown()
{
  window.open('https://www.ama.com.fj/');
}

organic()
{
  window.open('https://fijianmade.gov.fj/compliance/');
}

  

}
