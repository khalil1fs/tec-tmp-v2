import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Tva} from '../model/tva.model';

@Injectable({
  providedIn: 'root'
})
export class TvaService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'tva/';
  }

  private _tvas: Array<Tva>;
  private _selectedTva: Tva;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<Tva>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
      else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<Tva> {
    return this.http.post<Tva>(this.API, {...this.selectedTva});
  }

  edit(): Observable<Tva> {
    return this.http.put<Tva>(this.API, this.selectedTva);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Tva> {
    return this.http.get<Tva>(this.API + id + '/');
  }

  findByCriteria(tva: Tva): Observable<Array<Tva>>{
    return this.http.post<Array<Tva>>(this.API + 'search/', tva);
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

  get tvas(): Array<Tva> {
    if (this._tvas == null) {
      this._tvas = new Array<Tva>();
    }
    return this._tvas;
  }

  set tvas(value: Array<Tva>) {
    this._tvas = value;
  }

  get selectedTva(): Tva {
    if (this._selectedTva == null) {
      this._selectedTva = new Tva();
    }
    return this._selectedTva;
  }

  set selectedTva(value: Tva) {
    this._selectedTva = value;
  }


}
