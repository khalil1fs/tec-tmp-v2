import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TvaService} from 'src/app/controller/service/tva.service';
import {Tva} from 'src/app/controller/model/tva.model';
import {TvaAddComponent} from '../tva-add/tva-add.component';
import {TvaEditComponent} from '../tva-edit/tva-edit.component';
import {TvaViewComponent} from '../tva-view/tva-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tva-list',
  templateUrl: './tva-list.component.html',
  styleUrls: ['./tva-list.component.css']
})
export class TvaListComponent implements OnInit {

 selection = new SelectionModel<Tva>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private tvaService: TvaService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.tvaService.findAll().subscribe(
      data => this.tvas = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.tvaService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.tvas = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedTva = {...row};
    const dialogRef = this.dialogModel.open(TvaEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedTva = new Tva();
    const dialogRef = this.dialogModel.open(TvaAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.tvaService.delete(row.id).subscribe(data => {
      data == 1 ? this.tvas = this.tvas.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Tva Deleted Successfully',
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
    this.selectedTva = row;
    const dialogRef = this.dialogModel.open(TvaViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.tvaService.delete(item.id).subscribe( data=> {
        data == 1 ? this.tvas = this.tvas.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " tvas Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Tva>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tvas.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tvas.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "amount",
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
    {name: 'amount'},
    {name: 'deleted'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.tvaService.addModal;
  }

  set addModal(value: string) {
    this.tvaService.addModal = value;
  }
  
  get editModal(): string {
    return this.tvaService.editModal;
  }

  set editModal(value: string) {
    this.tvaService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.tvaService.viewModal;
  }

  set viewModal(value: string) {
    this.tvaService.viewModal = value;
  }
  
  
  get tvas(): Array<Tva> {
    return this.tvaService.tvas;
  }

  set tvas(value: Array<Tva>) {
    this.tvaService.tvas = value;
  }

  get selectedTva(): Tva {
    return this.tvaService.selectedTva;
  }

  set selectedTva(value: Tva) {
    this.tvaService.selectedTva = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}