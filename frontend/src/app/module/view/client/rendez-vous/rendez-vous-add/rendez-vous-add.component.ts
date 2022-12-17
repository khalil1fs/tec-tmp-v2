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
  selector: 'app-rendez-vous-add',
  templateUrl: './rendez-vous-add.component.html',
  styleUrls: ['./rendez-vous-add.component.css']
})
export class RendezVousAddComponent implements OnInit {

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
      nom: [null, [Validators.required]],
    });
  }

  save() {
    this.selectedRendezVous = this.rendezVous.value;
    this.rendezVousService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.rendezVouss = [{...data},...this.rendezVouss];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: RendezVous) {
    let message = 'RendezVous created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating rendezVous';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.rendezVouss = [{...data}, ...this.rendezVouss];
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
    return this.rendezVousService.addModal;
  }

  set addModal(value: string) {
    this.rendezVousService.addModal = value;
  }
  
  get viewModal(): string {
    return this.rendezVousService.viewModal;
  }

  set viewModal(value: string) {
    this.rendezVousService.viewModal = value;
  }
  
  get editModal(): string {
    return this.rendezVousService.editModal;
  }

  set editModal(value: string) {
    this.rendezVousService.editModal = value;
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
