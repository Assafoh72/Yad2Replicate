import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AssetService } from '../services/asset.service';
import { Asset } from '../data/asset.interfaces';


@Component({
  selector: 'app-assset-card',
  templateUrl: './assset-card.component.html',
  styleUrls: ['./assset-card.component.scss']
})
export class AsssetCardComponent implements OnInit {
  @Input() appartment?: Asset;

  // assets: Asset[] = [];
  isShowSlideDownAppartmentDetails: boolean = false;

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    // this.assets = this.assetService.getAsset();

  }

  numberWithCommas(price?: number) {
    // if(price == 0){
    //   return 0;
    // }
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  onClickShowAppartment(){
    this.isShowSlideDownAppartmentDetails = !this.isShowSlideDownAppartmentDetails;
  }



}
