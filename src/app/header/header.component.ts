import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleBarHamburger='active';
  toggleBarClose='close';
  sideBar=''
  toggleAction(){
    if (this.toggleBarHamburger === 'active' && this.toggleBarClose==='close') {
      this.toggleBarHamburger = 'close';
      this.toggleBarClose='active';
      this.sideBar='show'
    } else {
      this.toggleBarHamburger = 'active';
      this.toggleBarClose='close';
      this.sideBar=''
    }
  }
}
