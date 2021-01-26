import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from '../classes/user-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private baseUrl = "http://localhost:8080/FileUploadExample/api/";

  constructor(private http: HttpClient) { }

  saveData(userDetail: UserDetail): Observable<any> {
    let url = this.baseUrl + "saveUser";
    return this.http.post(url, userDetail);
  }

  uploadFile(file: File, id: number):Observable<any> {
    let url = this.baseUrl + "uploadImage/" + id;

    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(url, formData);
  }
}
