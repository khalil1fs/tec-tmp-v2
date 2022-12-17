import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {RendezVous} from '../model/rendez-vous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'rendez-vous/';
  }

  private _rendezVouss: Array<RendezVous>;
  private _selectedRendezVous: RendezVous;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<RendezVous>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<RendezVous> {
    return this.http.post<RendezVous>(this.API, {...this.selectedRendezVous});
  }

  edit(): Observable<RendezVous> {
    return this.http.put<RendezVous>(this.API, this.selectedRendezVous);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<RendezVous> {
    return this.http.get<RendezVous>(this.API + id + '/');
  }

  findByCriteria(rendezVous: RendezVous): Observable<Array<RendezVous>>{
    return this.http.post<Array<RendezVous>>(this.API + 'search/', rendezVous);
  }



//                      Getters & Setters 

  get addModal(): string {
    return this._addModal;
  }

  set addModal(value: string) {
    this._addModal = value;
  }
  
  get editModal(): string {
    return this._editModal;
  }

  set editModal(value: string) {
    this._editModal = value;
  }
  
  
  get viewModal(): string {
    return this._viewModal;
  }

  set viewModal(value: string) {
    this._viewModal = value;
  }
  
  get rendezVouss(): Array<RendezVous> {
    if (this._rendezVouss == null) {
      this._rendezVouss = new Array<RendezVous>();
    }
    return this._rendezVouss;
  }

  set rendezVouss(value: Array<RendezVous>) {
    this._rendezVouss = value;
  }

  get selectedRendezVous(): RendezVous {
    if (this._selectedRendezVous == null) {
      this._selectedRendezVous = new RendezVous();
    }
    return this._selectedRendezVous;
  }

  set selectedRendezVous(value: RendezVous) {
    this._selectedRendezVous = value;
  }


}