import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  items = new Array(8);

  constructor(private popOverCtlr: PopoverController) {}

  ngOnInit() {}

  onClick(valor: number) {
    // console.log(valor);
    this.popOverCtlr.dismiss({
      item: valor,
    });
  }
}
