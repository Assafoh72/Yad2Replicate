import { Component, OnInit } from '@angular/core';
import { Yad2ApiService } from '../services/yad2-api.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  data: any;

  constructor(private dataService: Yad2ApiService){}
  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
    console.log(this.data);

  }

}

