import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  username:String="Emmanuel Reinoso";
  theme:string='antiquewhite';
  widthMenu:number = 30;
  menuVisible:boolean=false;
  visibleMenu:boolean=true;

  alternateVisibility():void{
    this.visibleMenu=!this.visibleMenu;
  }
  setTheme(): void {
    const randomColor = this.getRandomColor();
    this.theme = randomColor;
    }
    
    private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
  setSize():void{
  this.widthMenu+=10;
  if(this.widthMenu>100){
    this.widthMenu=30;
  }

}
}
