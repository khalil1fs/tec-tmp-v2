import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TvaService} from 'src/app/controller/service/tva.service';
import {Tva} from 'src/app/controller/model/tva.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tva-add',
  templateUrl: './tva-add.component.html',
  styleUrls: ['./tva-add.component.css']
})
export class TvaAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private tvaService: TvaService)
 {
 }

 ngOnInit(): void {
 }


  save() {
    this.tvaService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.tvas = [{...data},...this.tvas];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Tva) {
    let message = 'Tva created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating tva';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.tvas = [{...data}, ...this.tvas];
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
    return this.tvaService.addModal;
  }

  set addModal(value: string) {
    this.tvaService.addModal = value;
  }
  
  get viewModal(): string {
    return this.tvaService.viewModal;
  }

  set viewModal(value: string) {
    this.tvaService.viewModal = value;
  }
  
  get editModal(): string {
    return this.tvaService.editModal;
  }

  set editModal(value: string) {
    this.tvaService.editModal = value;
  }
  
  get tvas(): Array<Tva> {
    return this.tvaService.tvas;
  }

  set tvas(value: Array<Tva>) {
    this.tvaService.tvas = value;
  }

  get selectedTva(): Tva {
    return this.tvaService.selectedTva;
  }

  set selectedTva(value: Tva) {
    this.tvaService.selectedTva = value;
  }

}
