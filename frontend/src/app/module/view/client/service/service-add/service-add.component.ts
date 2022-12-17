import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/controller/service/service.service';
import {Service} from 'src/app/controller/model/service.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

service: FormGroup;

 constructor(private router: Router,
             private fb: FormBuilder,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private serviceService: ServiceService)
 {
   this.initForm();
 }

 ngOnInit(): void {
 }

 initForm() {
    this.service = this.fb.group({
      nom: [null, [Validators.required]],
    });
  }

  save() {
    this.selectedService = this.service.value;
    this.serviceService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.services = [{...data},...this.services];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Service) {
    let message = 'Service created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating service';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.services = [{...data}, ...this.services];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


  close() {
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters

  get addModal(): string {
    return this.serviceService.addModal;
  }

  set addModal(value: string) {
    this.serviceService.addModal = value;
  }
  
  get viewModal(): string {
    return this.serviceService.viewModal;
  }

  set viewModal(value: string) {
    this.serviceService.viewModal = value;
  }
  
  get editModal(): string {
    return this.serviceService.editModal;
  }

  set editModal(value: string) {
    this.serviceService.editModal = value;
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

}
