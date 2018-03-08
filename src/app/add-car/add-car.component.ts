import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarStatus = false;
  @Output('onAddCar') carEmiter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  carsYears: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2000
  }
  ]

  addCar(carNameEl: HTMLInputElement){
    this.carEmiter.emit({
      name: carNameEl.value, 
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

  constructor() { }

  ngOnInit() {
  }

}
