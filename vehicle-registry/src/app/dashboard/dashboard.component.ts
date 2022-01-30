import { Component, OnInit } from '@angular/core';
import { VehicleService} from '../service/vehicle.service'
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vehicles: any[] = [];

  constructor(private _service: VehicleService) { }

  ngOnInit(): void {
    this._service.getVehicles()
    .subscribe((response) => {
      this.vehicles = response
      console.log(response)

    });
  }

}
