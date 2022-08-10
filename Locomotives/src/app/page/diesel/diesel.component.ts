import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocoModel } from 'src/app/models/diesel.model';
import { DieselService } from 'src/app/service/diesel.service';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.component.html',
  styleUrls: ['./diesel.component.scss']
})
export class DieselComponent implements OnInit {

  public locos: LocoModel[] = [];

  constructor(
    private dieselService: DieselService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dieselService.getDiesel().subscribe({
      next: (locos: LocoModel[]) => {
        this.locos = locos
      },
      error: (err) => {console.log(err)},
      complete: () => {console.log(`The request has done!`)},
    })
  }

  public goToDetails(loco?: LocoModel): void {
    this.router.navigateByUrl(`részletek/${loco?._id}`)
  }

}
