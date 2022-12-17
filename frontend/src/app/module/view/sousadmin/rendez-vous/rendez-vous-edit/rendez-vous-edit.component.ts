import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RendezVousService} from 'src/app/controller/service/rendez-vous.service';
import {RendezVous} from 'src/app/controller/model/rendez-vous.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-rendez-vous-edit',
  templateUrl: './rendez-vous-edit.component.html',
  styleUrls: ['./rendez-vous-edit.component.css']
})
export class RendezVousEditComponent implements OnInit {

rendezVous: FormGroup;

 constructor(private router: Router,
             private fb: FormBuilder,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private rendezVousService: RendezVousService)
 {
   this.initForm();
 }


 ngOnInit(): void {
 }

 initForm() {
    this.rendezVous = this.fb.group({
      id: [this.selectedRendezVous.id],
      nom: [this.selectedRendezVous.nom, [Validators.required]],
    });
  }

  edit() {
    this.selectedRendezVous = this.rendezVous.value;
    this.rendezVousService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: RendezVous) {
    let message = 'RendezVous edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing rendezVous or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.rendezVouss = this.rendezVouss.filter(i => i.id != data.id);
      this.rendezVouss = [{...data}, ...this.rendezVouss];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/rendez-vous']).then();
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

}
