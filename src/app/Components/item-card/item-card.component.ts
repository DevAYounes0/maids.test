import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ItemCardComponent {
  @Input() user:any;
}
