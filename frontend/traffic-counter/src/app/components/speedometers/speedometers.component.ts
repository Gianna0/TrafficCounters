import { Component, OnInit } from '@angular/core';
import { Speedometer } from 'src/app/models/Speedometer';
import { SpeedometerService } from 'src/app/services/speedometer.service';


@Component({
  selector: 'app-speedometers',
  templateUrl: './speedometers.component.html',
  styleUrls: ['./speedometers.component.scss']
})
export class SpeedometersComponent implements OnInit {
  private speedometerService: SpeedometerService;
  public speedometers: Speedometer[] = Array<Speedometer>() ;

  constructor(speedometerService: SpeedometerService) {
    this.speedometerService = speedometerService;
  }

  ngOnInit(): void {
    this.speedometerService.getAllSpeedometers().subscribe((data: any) => {
      this.speedometers = data;
    });
  }

}
