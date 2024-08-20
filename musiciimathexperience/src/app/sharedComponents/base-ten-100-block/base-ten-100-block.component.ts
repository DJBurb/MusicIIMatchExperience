import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-ten-100-block',
  templateUrl: './base-ten-100-block.component.html',
  styleUrls: ['./base-ten-100-block.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BaseTen100BlockComponent  {

  rows: number[] = Array(10).fill(0);
  cells: number[] = Array(10).fill(0);

  constructor() { }


}
