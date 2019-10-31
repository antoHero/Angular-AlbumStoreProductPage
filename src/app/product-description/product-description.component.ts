import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { AlbumStorePage } from '../../../e2e/app.po';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;

  constructor(private _productservice: ProductService) { }

  ngOnInit() {
    this._productservice.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
