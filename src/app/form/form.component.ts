import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FieldsService } from '../fields.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
  objectsArray: any[] = []

  constructor(public fieldService: FieldsService) {}

  ngOnInit(): void {
    this.getFields();
  }
  
  getFields(): void{
    this.fieldService.getFields().subscribe((response: any[]) => {
      this.objectsArray = response;
    });
  }

  @Output() dataChanged: EventEmitter<any[]> = new EventEmitter();

  addNewField() {
    this.fieldService.getNewField().subscribe((response: any[]) => {
      console.log("add data from postman",response)
      this.objectsArray.push(response);
    });
  }

  removeField() {
    this.objectsArray.pop();
  }

  isEditing: boolean[] = [];

  cancelEdit(index: number) {
    this.isEditing[index] = false;
    const task = this.objectsArray[index];
    task.item.type = 'dropdown';
  }

  changeFieldType(index: number) {
    this.isEditing[index] = true;
    const field = this.objectsArray[index];
    if (field.item.type === 'dropdown') {
      field.item.type = 'text';
    } else {
      field.item.type = 'text';
    }
  }

  submitForm(){
    this.dataChanged.emit(this.objectsArray);
  }
}
