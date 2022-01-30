import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private _formBuilder: FormBuilder, private _service: VehicleService) {
    this.form = this._formBuilder.group({
      model: ['', Validators.required],
      year: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  save(): void {
    this.showError = false

    if(this.form?.invalid){
      this.showError = true;
      return;
    }
      
      this._service.saveVehicle(this.vehicle)
        .subscribe((response) => {
          console.log(response)
        })
  }

}