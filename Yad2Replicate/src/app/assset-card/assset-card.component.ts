import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AssetService } from '../services/asset.service';
import { Asset } from '../data/asset.interfaces';


@Component({
  selector: 'app-assset-card',
  templateUrl: './assset-card.component.html',
  styleUrls: ['./assset-card.component.scss']
})
export class AsssetCardComponent implements OnInit {
  assets: Asset[] = [];

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.assets = this.assetService.getAsset();
  }

}
