import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: any[] = [];

  constructor(private _service: VehicleService) { }

  ngOnInit(): void {
    this._service.getVehicles()
    .subscribe((response) => {
      this.vehicles = response;
      console.log(this.vehicles)

    });
  }

}
