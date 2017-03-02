import { Component } from '@angular/core';

import { AngularFireOffline, AfoListObservable } from 'angularfire2-offline';

@Component({
  selector: 'app-write-list',
  templateUrl: './write-list.component.html'
})
export class WriteListComponent {
  groceries: AfoListObservable<any[]>;
  constructor(private afo: AngularFireOffline) {
    this.groceries = this.afo.database.list('/groceries');
  }
  addItem(newName: string) {
    this.groceries.push({ text: newName });
  }
  deleteEverything() {
    this.groceries.remove();
  }
  deleteItem(key: string) {
    this.groceries.remove(key);
  }
  prioritize(item) {
    this.groceries.update(item.$key, { text: item.text + '‼️' });
  }
  reset() {
    this.groceries.remove();
    this.groceries.push({text: 'Milk'});
    this.groceries.push({text: 'Eggs'});
    this.groceries.push({text: 'Bread'});
  }
}
