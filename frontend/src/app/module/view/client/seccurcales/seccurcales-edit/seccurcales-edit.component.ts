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
  selector: 'app-seccurcales-edit',
  templateUrl: './seccurcales-edit.component.html',
  styleUrls: ['./seccurcales-edit.component.css']
})
export class SeccurcalesEditComponent implements OnInit {

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
      id: [this.selectedSeccurcales.id],
      libelle: [this.selectedSeccurcales.libelle, [Validators.required]],
    });
  }

  edit() {
    this.selectedSeccurcales = this.seccurcales.value;
    this.seccurcalesService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Seccurcales) {
    let message = 'Seccurcales edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing seccurcales or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.seccurcaless = this.seccurcaless.filter(i => i.id != data.id);
      this.seccurcaless = [{...data}, ...this.seccurcaless];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/seccurcales']).then();
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
      this.dialogModel.getDialogById(this.editModal).close();
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

}
