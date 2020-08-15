import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../environments/environment';
import { API_KEY } from '../../constants/key';
import { catchError, map } from 'rxjs/operators';
import { IArtCard } from '../../models/art-card';

@Injectable({
  providedIn: 'root'
})
export class ArtObjectService {

  constructor(private httpClient: HttpClient) {
  }

  public getDescription(id): Observable<string> {
    const url = `${API_URL}/${id}?key=${API_KEY}`;
    return this.httpClient.get<{ artObject: {description} }>(url).pipe(
      map(item => {
          console.log(item);
          return item.artObject.description;
        }
      ),
      catchError((err) => {
        console.log(err);
        return [];
      })
    );
  }
}
