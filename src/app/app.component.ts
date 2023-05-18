import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SocialMediaApp';

  

  toggleMenu() {
    const lists = document.getElementById('lists');
    const hamburger = document.getElementById('hamburger');
    lists?.classList.toggle('active');
    hamburger?.classList.toggle('active');
  }

  

  

}
