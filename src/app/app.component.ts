import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ItemCardComponent } from './Components/item-card/item-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    MatListModule,
    MatPaginator,
    MatPaginatorModule,
    RouterOutlet,
    ItemCardComponent,
    MatGridListModule,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
