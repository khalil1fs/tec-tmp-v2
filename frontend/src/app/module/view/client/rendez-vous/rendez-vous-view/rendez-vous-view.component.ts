import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RendezVousService} from 'src/app/controller/service/rendez-vous.service';
import {RendezVous} from 'src/app/controller/model/rendez-vous.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-rendez-vous-view',
  templateUrl: './rendez-vous-view.component.html',
  styleUrls: ['./rendez-vous-view.component.css']
})
export class RendezVousViewComponent implements OnInit {


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
   this.findById(this.selectedRendezVous.id);
 }

 initForm() {
    this.rendezVous = this.fb.group({
      id: [this.selectedRendezVous.id],
      nom: [this.selectedRendezVous.nom, [Validators.required]],
    });
  }

    
 findById(id: number) {
   this.rendezVousService.findById(id).subscribe(
       data => this.selectedRendezVous = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/rendez-vous']).then();
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
  
  
  get selectedRendezVous(): RendezVous {
    return this.rendezVousService.selectedRendezVous;
  }

  set selectedRendezVous(value: RendezVous) {
    this.rendezVousService.selectedRendezVous = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}