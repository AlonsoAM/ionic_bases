import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {

  data = Array(20);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonInfiniteScroll) infiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    // console.log(event);
    setTimeout(() => {

      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const newvoArr = new Array(20);
      this.data.push(...newvoArr);

      // event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }

}
