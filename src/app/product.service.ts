import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json'

  constructor(private _http: Http) { }

  getAlbum = (id: number) => {
    return this._http.get(this._albumUrl).map((response: Response) => {
      let data = response.json();
    });
  };


}
