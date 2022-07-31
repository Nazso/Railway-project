import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocoModel } from 'src/app/models/diesel.model';
import { ElectricService } from 'src/app/service/electric.service';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.scss']
})
export class ElectricComponent implements OnInit {

  public locos: LocoModel[] = [];

  constructor(
    private electricService: ElectricService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.electricService.getElectric().subscribe({
      next: (locos: LocoModel[]) => {
        this.locos = locos
      },
      error: (err) => {console.log(err)},
      complete: () => {
        console.log(`The request has done!`)
      },
    })
  }


}
