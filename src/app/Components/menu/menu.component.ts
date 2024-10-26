import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { UsersService } from '../../Services/users.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,

    AsyncPipe,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  constructor(private us: UsersService, private router: Router) {}
  users: any[] = [];
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  ngOnInit() {
    this.getAllUsers();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  onOptionSelected(option: string) {
    const user = this.users.find((u) => u.first_name === option);
    this.router.navigate(['/details'], { queryParams: user });
  }

  getAllUsers() {
    this.us
      .getUsers(1)
      .subscribe(
        (res) => {
          res.data.forEach((user) => {
            this.users.push(user);
          });
        },
        (error) => {
          console.error('Error:', error);
        }
      )
      .add(() => {
        this.us
          .getUsers(2)
          .subscribe(
            (res) => {
              res.data.forEach((user) => {
                this.users.push(user);
              });
            },
            (error) => {
              console.error('Error:', error);
            }
          )
          .add(() => {
            this.users.forEach((user) => {
              this.options.push(user['first_name']);
            });
          });
      });
  }
}
