import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Seccurcales} from '../model/seccurcales.model';

@Injectable({
  providedIn: 'root'
})
export class SeccurcalesService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'seccurcales/';
  }

  private _seccurcaless: Array<Seccurcales>;
  private _selectedSeccurcales: Seccurcales;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<Seccurcales>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<Seccurcales> {
    return this.http.post<Seccurcales>(this.API, {...this.selectedSeccurcales});
  }

  edit(): Observable<Seccurcales> {
    return this.http.put<Seccurcales>(this.API, this.selectedSeccurcales);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Seccurcales> {
    return this.http.get<Seccurcales>(this.API + id + '/');
  }

  findByCriteria(seccurcales: Seccurcales): Observable<Array<Seccurcales>>{
    return this.http.post<Array<Seccurcales>>(this.API + 'search/', seccurcales);
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
  
  get seccurcaless(): Array<Seccurcales> {
    if (this._seccurcaless == null) {
      this._seccurcaless = new Array<Seccurcales>();
    }
    return this._seccurcaless;
  }

  set seccurcaless(value: Array<Seccurcales>) {
    this._seccurcaless = value;
  }

  get selectedSeccurcales(): Seccurcales {
    if (this._selectedSeccurcales == null) {
      this._selectedSeccurcales = new Seccurcales();
    }
    return this._selectedSeccurcales;
  }

  set selectedSeccurcales(value: Seccurcales) {
    this._selectedSeccurcales = value;
  }


}