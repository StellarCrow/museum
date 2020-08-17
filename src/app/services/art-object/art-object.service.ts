import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../environments/environment';
import { API_KEY } from '../../constants/key';
import { catchError, map } from 'rxjs/operators';
import { IArtObject } from '../../models/art-object';
import { IArtItem } from '../../models/art-item';

@Injectable({
  providedIn: 'root'
})
export class ArtObjectService {

  constructor(private httpClient: HttpClient) {
  }

  public getFullObject(objectKey): Observable<IArtItem> {
    const url = `${API_URL}/${objectKey}?key=${API_KEY}`;
    return this.httpClient.get<{artObject: IArtObject}>(url).pipe(
      map(item => {
          return {
            title: item.artObject.title,
            category: item.artObject.acquisition.method,
            colors: item.artObject.colors,
            date: item.artObject.dating.sortingDate,
            imageUrl: item.artObject.webImage.url,
            dimensions: item.artObject.dimensions,
            description: item.artObject.description,
            materials: item.artObject.materials,
            author: item.artObject.principalMaker,
            tags: item.artObject.classification.iconClassDescription
          };
        }
      ),
      catchError((err) => {
        console.log(err);
        return [];
      })
    );
  }

  public getDescription(id): Observable<string> {
    const url = `${API_URL}/${id}?key=${API_KEY}`;
    return this.httpClient.get<{ artObject: {description} }>(url).pipe(
      map(item => {
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
