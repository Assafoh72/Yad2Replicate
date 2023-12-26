import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/data/asset.interfaces';
import { AssetService } from 'src/app/services/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];


  constructor (private assetService: AssetService){}

  ngOnInit(): void {
    this.assets = this.assetService.getAsset()
    console.log("assat ", this.assets);

  }

}
