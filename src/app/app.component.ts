import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zadanieSpr';

    pokazKwiaty = false;
    pokazZwierzatka = false;
    pokazSamochody = false;
  
    galeriaZdjec = [
      { id: 0, filename: 'obraz1.jpg', category: 1, downloads: 35 },
      { id: 1, filename: 'obraz2.jpg', category: 1, downloads: 43 },
      { id: 2, filename: 'obraz3.jpg', category: 2, downloads: 2 },
      { id: 3, filename: 'obraz4.jpg', category: 2, downloads: 53 },
      { id: 4, filename: 'obraz5.jpg', category: 2, downloads: 43 },
      { id: 5, filename: 'obraz6.jpg', category: 3, downloads: 11 },
      { id: 6, filename: 'obraz7.jpg', category: 2, downloads: 22 },
      { id: 7, filename: 'obraz8.jpg', category: 1, downloads: 33 },
      { id: 8, filename: 'obraz9.jpg', category: 2, downloads: 123 },
      { id: 9, filename: 'obraz10.jpg', category: 2, downloads: 22 },
      { id: 10, filename: 'obraz11.jpg', category: 2, downloads: 12 },
      { id: 11, filename: 'obraz12.jpg', category: 3, downloads: 321 }
    ];
  
    pobierz(zdj: any) {
      zdj.downloads += 1;
    }
  
}
