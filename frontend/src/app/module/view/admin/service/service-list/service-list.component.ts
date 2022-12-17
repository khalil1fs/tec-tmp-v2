import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/controller/service/service.service';
import {Service} from 'src/app/controller/model/service.model';
import {ServiceAddComponent} from '../service-add/service-add.component';
import {ServiceEditComponent} from '../service-edit/service-edit.component';
import {ServiceViewComponent} from '../service-view/service-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

 selection = new SelectionModel<Service>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private serviceService: ServiceService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.serviceService.findAll().subscribe(
      data => this.services = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.serviceService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.services = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedService = {...row};
    const dialogRef = this.dialogModel.open(ServiceEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedService = new Service();
    const dialogRef = this.dialogModel.open(ServiceAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.serviceService.delete(row.id).subscribe(data => {
      data == 1 ? this.services = this.services.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Service Deleted Successfully',
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
    this.selectedService = row;
    const dialogRef = this.dialogModel.open(ServiceViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.serviceService.delete(item.id).subscribe( data=> {
        data == 1 ? this.services = this.services.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " services Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Service>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.services.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.services.forEach((row) =>
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
    return this.serviceService.addModal;
  }

  set addModal(value: string) {
    this.serviceService.addModal = value;
  }
  
  get editModal(): string {
    return this.serviceService.editModal;
  }

  set editModal(value: string) {
    this.serviceService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.serviceService.viewModal;
  }

  set viewModal(value: string) {
    this.serviceService.viewModal = value;
  }
  
  
  get services(): Array<Service> {
    return this.serviceService.services;
  }

  set services(value: Array<Service>) {
    this.serviceService.services = value;
  }

  get selectedService(): Service {
    return this.serviceService.selectedService;
  }

  set selectedService(value: Service) {
    this.serviceService.selectedService = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}