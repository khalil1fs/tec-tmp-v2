import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SeccurcalesService} from 'src/app/controller/service/seccurcales.service';
import {Seccurcales} from 'src/app/controller/model/seccurcales.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seccurcales-add',
  templateUrl: './seccurcales-add.component.html',
  styleUrls: ['./seccurcales-add.component.css']
})
export class SeccurcalesAddComponent implements OnInit {

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
 }

 initForm() {
    this.seccurcales = this.fb.group({
      libelle: [null, [Validators.required]],
    });
  }

  save() {
    this.selectedSeccurcales = this.seccurcales.value;
    this.seccurcalesService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.seccurcaless = [{...data},...this.seccurcaless];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Seccurcales) {
    let message = 'Seccurcales created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating seccurcales';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.seccurcaless = [{...data}, ...this.seccurcaless];
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

}
