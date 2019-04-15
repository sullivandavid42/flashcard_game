import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {

  i = 0;
  editId: string | null;
  listOfData: any[] = [];
  @ViewChild(NzInputDirective, { read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: MouseEvent): void {
    if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
      this.editId = null;
    }
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Catégorie ${this.i}`,
        age: 'Non',
        address: `${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  startEdit(id: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
    console.log(document.getElementById('inputCat'));
  }

  ngOnInit(): void {
    this.addRow();
  }

}
