import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  form: FormGroup;
  vehicle: Vehicle = new Vehicle;

  error: string = ''
  showError = false;

  constructor(private _formBuilder: FormBuilder, private _service: VehicleService, private router: ActivatedRoute) {
    this.form = this._formBuilder.group({
      model: ['', Validators.required],
      year: [null, Validators.required],
      makeId: [null, Validators.required],
      doorQty: [null, Validators.required],
      transmissionType: [null, Validators.required],
      fuelType: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: Params) => {
      this._service.getVehiclesById(params["id"])
        .subscribe((response) => {
          console.log(response)
          this.vehicle = response
        })
    });
  }

  save(): void {
    this.showError = false

    if(this.form?.invalid){
      this.showError = true;
      this.error = "Todos os campos são obrigatórios!"
      return;
    }
      
    this._service.saveVehicle(this.vehicle)
    .subscribe(
        (response) => {
            console.log(response)
        },
        (error) => {
          this.error = error.error
          this.showError = true;
            console.log(error)
        }
)
        
  }

}