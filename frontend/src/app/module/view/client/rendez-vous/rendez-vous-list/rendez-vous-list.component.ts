import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RendezVousService} from 'src/app/controller/service/rendez-vous.service';
import {RendezVous} from 'src/app/controller/model/rendez-vous.model';
import {RendezVousAddComponent} from '../rendez-vous-add/rendez-vous-add.component';
import {RendezVousEditComponent} from '../rendez-vous-edit/rendez-vous-edit.component';
import {RendezVousViewComponent} from '../rendez-vous-view/rendez-vous-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.css']
})
export class RendezVousListComponent implements OnInit {

 selection = new SelectionModel<RendezVous>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private rendezVousService: RendezVousService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.rendezVousService.findAll().subscribe(
      data => this.rendezVouss = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.rendezVousService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.rendezVouss = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedRendezVous = {...row};
    const dialogRef = this.dialogModel.open(RendezVousEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedRendezVous = new RendezVous();
    const dialogRef = this.dialogModel.open(RendezVousAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.rendezVousService.delete(row.id).subscribe(data => {
      data == 1 ? this.rendezVouss = this.rendezVouss.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'RendezVous Deleted Successfully',
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
    this.selectedRendezVous = row;
    const dialogRef = this.dialogModel.open(RendezVousViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.rendezVousService.delete(item.id).subscribe( data=> {
        data == 1 ? this.rendezVouss = this.rendezVouss.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " rendezVouss Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<RendezVous>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.rendezVouss.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.rendezVouss.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "nom",
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
    {name: 'nom'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.rendezVousService.addModal;
  }

  set addModal(value: string) {
    this.rendezVousService.addModal = value;
  }
  
  get editModal(): string {
    return this.rendezVousService.editModal;
  }

  set editModal(value: string) {
    this.rendezVousService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.rendezVousService.viewModal;
  }

  set viewModal(value: string) {
    this.rendezVousService.viewModal = value;
  }
  
  
  get rendezVouss(): Array<RendezVous> {
    return this.rendezVousService.rendezVouss;
  }

  set rendezVouss(value: Array<RendezVous>) {
    this.rendezVousService.rendezVouss = value;
  }

  get selectedRendezVous(): RendezVous {
    return this.rendezVousService.selectedRendezVous;
  }

  set selectedRendezVous(value: RendezVous) {
    this.rendezVousService.selectedRendezVous = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}