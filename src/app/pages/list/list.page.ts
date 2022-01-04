import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) ionLits: IonList;
  usuarios: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }
  favorite(user: any) {
    console.log('favorite', user);
    this.ionLits.closeSlidingItems();
  }
  share(user: any) {
    console.log('share', user);
    this.ionLits.closeSlidingItems();
  }
  trash(user: any) {
    console.log('delete', user.name);
    this.ionLits.closeSlidingItems();
  }
}
