import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SeccurcalesService} from 'src/app/controller/service/seccurcales.service';
import {Seccurcales} from 'src/app/controller/model/seccurcales.model';
import {SeccurcalesAddComponent} from '../seccurcales-add/seccurcales-add.component';
import {SeccurcalesEditComponent} from '../seccurcales-edit/seccurcales-edit.component';
import {SeccurcalesViewComponent} from '../seccurcales-view/seccurcales-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-seccurcales-list',
  templateUrl: './seccurcales-list.component.html',
  styleUrls: ['./seccurcales-list.component.css']
})
export class SeccurcalesListComponent implements OnInit {

 selection = new SelectionModel<Seccurcales>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private seccurcalesService: SeccurcalesService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.seccurcalesService.findAll().subscribe(
      data => this.seccurcaless = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.seccurcalesService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.seccurcaless = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedSeccurcales = {...row};
    const dialogRef = this.dialogModel.open(SeccurcalesEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedSeccurcales = new Seccurcales();
    const dialogRef = this.dialogModel.open(SeccurcalesAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.seccurcalesService.delete(row.id).subscribe(data => {
      data == 1 ? this.seccurcaless = this.seccurcaless.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Seccurcales Deleted Successfully',
      'top',
      'right'
    );
    });
  }


  trackByFn(index, item)  {
    return index;
   }

  confirmDelete(row) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.delete(row);
      }
    });
  }



  view(row) {
    this.selectedSeccurcales = row;
    const dialogRef = this.dialogModel.open(SeccurcalesViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.seccurcalesService.delete(item.id).subscribe( data=> {
        data == 1 ? this.seccurcaless = this.seccurcaless.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " seccurcaless Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Seccurcales>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.seccurcaless.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.seccurcaless.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "libelle",
    "actions",
  ];


  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  filterDatatable(event) {
    // const val = event.target.value.toLowerCase();
    // const colsAmt = this.columns.length;
    // const keys = Object.keys(this.filteredData[0]);
    // this.data = this.filteredData.filter( 
    //   function (item) {
    //   for (let i = 0; i < colsAmt; i++) {
    //     if (
    //       item[keys[i]].tostring().toLowerCase().indexOf(val) !== -1 ||
    //       !val
    //     ) {
    //       return true;
    //     }
    //   }
    // });  }
}  
columns = [
    {name: 'id'},
    {name: 'libelle'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.seccurcalesService.addModal;
  }

  set addModal(value: string) {
    this.seccurcalesService.addModal = value;
  }
  
  get editModal(): string {
    return this.seccurcalesService.editModal;
  }

  set editModal(value: string) {
    this.seccurcalesService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.seccurcalesService.viewModal;
  }

  set viewModal(value: string) {
    this.seccurcalesService.viewModal = value;
  }
  
  
  get seccurcaless(): Array<Seccurcales> {
    return this.seccurcalesService.seccurcaless;
  }

  set seccurcaless(value: Array<Seccurcales>) {
    this.seccurcalesService.seccurcaless = value;
  }

  get selectedSeccurcales(): Seccurcales {
    return this.seccurcalesService.selectedSeccurcales;
  }

  set selectedSeccurcales(value: Seccurcales) {
    this.seccurcalesService.selectedSeccurcales = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}