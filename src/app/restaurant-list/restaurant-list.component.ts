import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurantList: [] = []
  
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.getAllData();
    //console.log(environment.apiURL)
    //console.log(environment.token)
  }

  getAllData(){
    this.service.getData().subscribe(data=>{
      this.restaurantList = data
      console.log(this.restaurantList)
    })
    
  }

}
