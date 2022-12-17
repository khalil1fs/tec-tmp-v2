import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Service} from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'service/';
  }

  private _services: Array<Service>;
  private _selectedService: Service;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<Service>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<Service> {
    return this.http.post<Service>(this.API, {...this.selectedService});
  }

  edit(): Observable<Service> {
    return this.http.put<Service>(this.API, this.selectedService);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Service> {
    return this.http.get<Service>(this.API + id + '/');
  }

  findByCriteria(service: Service): Observable<Array<Service>>{
    return this.http.post<Array<Service>>(this.API + 'search/', service);
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
  
  get services(): Array<Service> {
    if (this._services == null) {
      this._services = new Array<Service>();
    }
    return this._services;
  }

  set services(value: Array<Service>) {
    this._services = value;
  }

  get selectedService(): Service {
    if (this._selectedService == null) {
      this._selectedService = new Service();
    }
    return this._selectedService;
  }

  set selectedService(value: Service) {
    this._selectedService = value;
  }


}