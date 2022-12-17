import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SeccurcalesService} from 'src/app/controller/service/seccurcales.service';
import {Seccurcales} from 'src/app/controller/model/seccurcales.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-seccurcales-view',
  templateUrl: './seccurcales-view.component.html',
  styleUrls: ['./seccurcales-view.component.css']
})
export class SeccurcalesViewComponent implements OnInit {


seccurcales: FormGroup;

 constructor(private router: Router,
             private fb: FormBuilder,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private seccurcalesService: SeccurcalesService)
 {
   this.initForm();
  }

 ngOnInit(): void {
   this.findById(this.selectedSeccurcales.id);
 }

 initForm() {
    this.seccurcales = this.fb.group({
      id: [this.selectedSeccurcales.id],
      libelle: [this.selectedSeccurcales.libelle, [Validators.required]],
    });
  }

    
 findById(id: number) {
   this.seccurcalesService.findById(id).subscribe(
       data => this.selectedSeccurcales = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/seccurcales']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.seccurcalesService.addModal;
  }

  set addModal(value: string) {
    this.seccurcalesService.addModal = value;
  }
  

  get viewModal(): string {
    return this.seccurcalesService.viewModal;
  }

  set viewModal(value: string) {
    this.seccurcalesService.viewModal = value;
  }
  
  get editModal(): string {
    return this.seccurcalesService.editModal;
  }

  set editModal(value: string) {
    this.seccurcalesService.editModal = value;
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

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}