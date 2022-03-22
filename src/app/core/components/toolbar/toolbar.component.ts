import { MenuItem } from './../../models/menu-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isLoggedIn: boolean | null = null;
  @Input() title: string = '';
  @Input() menuItems: MenuItem[] = [];

  @Output() private logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.logout.emit();
  }
}
