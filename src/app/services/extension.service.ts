import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Extension } from '../entities/extension';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  private extensionUrl: string;
  constructor(private http: HttpClient) {
    this.extensionUrl = `${environment.apiUrl}/extensions/`;
   }

   public save(extension: Extension) {
    return this.http.post<Extension>(this.extensionUrl, extension);
  }

  public findAll(): Observable<Extension[]> {
    return this.http.get<Extension[]>(this.extensionUrl);
  }

  public findByGameId(gameId: number): Observable<Extension[]> {
    return this.http.get<Extension[]>(this.extensionUrl.concat("game/",gameId.toString()));
  }

  findById(extensionId: number): Observable<Extension> {
    return this.http.get<Extension>(this.extensionUrl.concat(extensionId.toString()));
  }

  delete(extensionId: number): Observable<{}> {
    return this.http.delete<Extension>(this.extensionUrl.concat(extensionId.toString()));
  }

  update(extension: Extension, extensionId: number) {
    return this.http.put<Extension>(this.extensionUrl.concat(extensionId.toString()), extension);
  }
}
