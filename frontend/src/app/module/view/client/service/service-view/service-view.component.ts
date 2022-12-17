import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/controller/service/service.service';
import {Service} from 'src/app/controller/model/service.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {


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
   this.findById(this.selectedService.id);
 }

 initForm() {
    this.service = this.fb.group({
      id: [this.selectedService.id],
      nom: [this.selectedService.nom, [Validators.required]],
    });
  }

    
 findById(id: number) {
   this.serviceService.findById(id).subscribe(
       data => this.selectedService = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/service']).then();
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
  
  
  get selectedService(): Service {
    return this.serviceService.selectedService;
  }

  set selectedService(value: Service) {
    this.serviceService.selectedService = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}