import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserCardComponent {
  @Input() name: string;
  @Input() username: string;
  @Input() website: string;
  @Input() email: string;
}
