import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botons',
  templateUrl: './botons.page.html',
  styleUrls: ['./botons.page.scss'],
})
export class BotonsPage implements OnInit {

  favorito = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.favorito = !this.favorito;
  }

}
