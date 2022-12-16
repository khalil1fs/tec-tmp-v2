import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TvaService} from 'src/app/controller/service/tva.service';
import {Tva} from 'src/app/controller/model/tva.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-tva-view',
  templateUrl: './tva-view.component.html',
  styleUrls: ['./tva-view.component.css']
})
export class TvaViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private tvaService: TvaService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedTva.id);
 }


    
 findById(id: number) {
   this.tvaService.findById(id).subscribe(
       data => this.selectedTva = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/tva']).then();
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
  
  
  get selectedTva(): Tva {
    return this.tvaService.selectedTva;
  }

  set selectedTva(value: Tva) {
    this.tvaService.selectedTva = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}