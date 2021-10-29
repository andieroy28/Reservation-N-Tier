import { Component, OnInit } from '@angular/core';
import { Reservation, ReservationService } from 'src/services/reservation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styles: [
  ]
})
export class ReservationFormComponent implements OnInit {
  constructor(public service: ReservationService) { }

  ngOnInit(): void {
    
    //var selectedRecord = new Reservation();
    // var selectedRecord = sessionStorage.getItem('selectedRecord');
    // this.service.formData = Object.assign({}, selectedRecord);
  }

}