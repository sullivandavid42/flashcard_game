import { Component, OnInit } from '@angular/core';
import { StringService, StringModel } from 'src/app/services/string.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;

  constructor(private stringService: StringService) { }

  ngOnInit() {
  }

  toggleSideBar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
