import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'third-class-c';

  public valor : number = 0;

  incremento(event : any){
    console.log(event);
    this.valor += event;
  }
}
