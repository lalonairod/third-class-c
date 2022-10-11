import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public flag : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() : void{
    this.flag =!this.flag;
  }

  public mouseEnter() : void{
    console.log("Enter");
  }

  ///[^A-Za-zá-úÁ-Ú]|[*÷x]/g

  public validation(event : any) : void{
    console.log(event);
    console.log(event.target);
    console.log((event.target as HTMLInputElement).value);

    let replace = (event.target as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú]|[*÷x]/g,'');
    console.log(replace);
    
    (event.target as HTMLInputElement).value = replace;
  }

}
