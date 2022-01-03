import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {

  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

}
