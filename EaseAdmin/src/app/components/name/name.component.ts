import { Component } from '@angular/core';
import { NameService } from 'src/app/service/name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent {
  name: string = '';
  response: string | null = null;

  constructor(private nameService: NameService) {}

  getNameResponse(): void {
    this.nameService.getNameResponse(this.name).subscribe({
      next: (res) => (this.response = res),
      error: (err) => console.error(err),
    });
  }
}
