import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';


@Component({
  selector: 'app-layout',
  imports: [CommonModule,HeaderComponent,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
