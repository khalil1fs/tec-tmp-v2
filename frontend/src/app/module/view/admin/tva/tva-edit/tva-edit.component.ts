import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TvaService} from 'src/app/controller/service/tva.service';
import {Tva} from 'src/app/controller/model/tva.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-tva-edit',
  templateUrl: './tva-edit.component.html',
  styleUrls: ['./tva-edit.component.css']
})
export class TvaEditComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private tvaService: TvaService)
 {
 }


 ngOnInit(): void {
 }


  edit() {
    this.tvaService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Tva) {
    let message = 'Tva edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing tva or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.tvas = this.tvas.filter(i => i.id != data.id);
      this.tvas = [{...data}, ...this.tvas];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/tva']).then();
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
    return this.tvaService.addModal;
  }

  set addModal(value: string) {
    this.tvaService.addModal = value;
  }
  
  get editModal(): string {
    return this.tvaService.editModal;
  }

  set editModal(value: string) {
    this.tvaService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.tvaService.viewModal;
  }

  set viewModal(value: string) {
    this.tvaService.viewModal = value;
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
