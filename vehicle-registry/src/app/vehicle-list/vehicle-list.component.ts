import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { VehicleService} from '../service/vehicle.service'


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private _service: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this._service.getVehicles()
    .subscribe((response) => {
      this.vehicles = response
      console.log(response)

    });
  }

  navigate() {
    this.router.navigateByUrl("crud")
  }

  navigateWithId(id?: number | null) {
    this.router.navigateByUrl(`crud?id=${id}`);
  }

  

}