import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FieldsService {

    public fieldsUrl="https://c89b37b0-a742-46ba-81bb-9732383ada6e.mock.pstmn.io";
  constructor(public httpClient: HttpClient) { }

  getFields(){
    return this.httpClient.get<any>(`${this.fieldsUrl}/getFields`)
  }
  
  getNewField(){
    return this.httpClient.get<any>(`${this.fieldsUrl}/getNewField`)
  }

  saveData(saveArray: any[]){
    return this.httpClient.post(`${this.fieldsUrl}/saveResponse`, saveArray);
  }
}
