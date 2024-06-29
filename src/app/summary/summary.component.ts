import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { saveAs } from 'file-saver';
import { FieldsService } from '../fields.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent{
  // @Input() summaryArray: any[] = [];

  constructor(public fieldService: FieldsService){}
  summaryArray: any[] = [];

  receiveData(result: any) {
    this.summaryArray = result;
  }

  saveData() {
    this.fieldService.saveData(this.summaryArray).subscribe(response => {
      alert(response)
    })
    const data = JSON.stringify(this.summaryArray, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    saveAs(blob, 'data.json');
  }
}
