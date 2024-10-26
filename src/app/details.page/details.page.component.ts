import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details.page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './details.page.component.html',
  styleUrl: './details.page.component.css',
})
export class DetailsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}
  user: any;
  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.user = params;
    });
  }
}
