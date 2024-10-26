import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagesInterface } from '../pages.interface';
import { environment } from '../../../environment';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(currentPage: number) {
    return this.http.get<PagesInterface>(
      `${environment.USERS_API}?page=${currentPage}`
    );
  }
}
