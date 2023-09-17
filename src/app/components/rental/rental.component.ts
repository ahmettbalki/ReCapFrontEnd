import { Component } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
  rentals: Rental[] = [];

  rentalResponseModel: RentalResponseModel = {
    data: this.rentals,
    message: "",
    success: true
  };
  constructor(private RentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.RentalService.getRentals().subscribe(response => {
      this.rentals = response.data
    });
  }
}
