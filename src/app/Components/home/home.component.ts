import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { UsersService } from '../../Services/users.service';
import { ItemCardComponent } from '../../Components/item-card/item-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PagesInterface, UsersInterface } from '../../pages.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    MatListModule,
    MatPaginator,
    MatPaginatorModule,
    RouterOutlet,
    ItemCardComponent,
    MatGridListModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private US: UsersService,
    private router: Router
  ) {}
  maxPage: number = 0;
  pages: any;
  users: UsersInterface[] = [];
  currentPage = 1;
  beforePage() {
    if (this.currentPage >= this.maxPage && this.currentPage != 0) {
      this.currentPage = this.currentPage - 1;
      this.getData();
    } else {
      return;
    }
  }
  nextPage() {
    if (this.currentPage < this.maxPage) {
      this.currentPage = this.currentPage + 1;
      this.getData();
    } else {
      return;
    }
  }
  details(user: UsersInterface) {
    this.router.navigate(['/details'], { queryParams: user });
  }

  async getData() {
    this.US.getUsers(this.currentPage).subscribe(
      (res) => {
        this.pages = res.data;
        this.users = res.data;
        this.maxPage = res.total_pages;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  ngOnInit(): void {
    this.getData();
  }
}
