import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocoModel } from 'src/app/models/diesel.model';
import { DieselService } from 'src/app/service/diesel.service';
import { ElectricService } from '../../service/electric.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public loco?: LocoModel;
  public subs?: Subscription;
  public id?: any;
  public locoSubs?: Subscription;

  constructor(
    private dieselService: DieselService,
    private electricService: ElectricService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subs = this.ar.paramMap.subscribe(
      param => this.id = param.get('id')
    )

    this.locoSubs = this.dieselService.getOneDiesel(this.id).subscribe(
      (loco: LocoModel) => this.loco = loco
    )

    this.electricService.getElectricOne(this.id).subscribe(
      (loco: LocoModel) =>  this.loco = loco
    )
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.locoSubs?.unsubscribe();
  }

  public backTo(): void {
    history.back()
  };

}
