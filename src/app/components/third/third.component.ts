import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  @Output () salida : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() : void{
    this.salida.emit(1);
  }

  public restar(){
    this.salida.emit(-1);
  }



}
