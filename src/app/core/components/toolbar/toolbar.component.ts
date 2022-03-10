import { MenuItem } from './../../models/menu-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string = '';
  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
