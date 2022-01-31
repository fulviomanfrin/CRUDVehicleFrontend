import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { VehicleService} from '../service/vehicle.service';
//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];
  vehicle = new Vehicle;
  // modalRef?: BsModalRef;
  // message?: string;

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

  

  deleteId(id?: number | null) {
    this._service.deleteVehicle(id)
      .subscribe((response) => {
          console.log(response)
          this.router.navigateByUrl("list");
      })
  }

  //Confirmation Modal
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  // }

  // confirm(): void {
  //   this.message = 'Confirmed!';
  //   this.modalRef?.hide();
  // }
 
  // decline(): void {
  //   this.message = 'Declined!';
  //   this.modalRef?.hide();
  // }

  //getTransmissionText(ETransmission)


}
