import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-title',
  templateUrl: './skills-title.component.html',
  styleUrls: ['./skills-title.component.scss'],
  standalone: true
})
export class SkillsTitleComponent  implements OnInit {
  @Input() level: string;

  constructor() { }

  ngOnInit() {}

}
