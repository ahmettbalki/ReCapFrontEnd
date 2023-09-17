import { Component } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brands: Brand[] =[];
  currentBrand: Brand | null = null;

  brandResponseModel: BrandResponseModel={
    data: this.brands,
    message: "",
    success: true
  };
  constructor(private BrandService: BrandService){}

  ngOnInit():void{
    this.getBrands();
  }

  getBrands(){
    this.BrandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    });
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
