import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { NewDirectiveComponent } from './new-directive/new-directive.component';
import { BackgroundDirective } from './directives/background.directive';
import { RenderigDirectiveDirective } from './directives/renderig-directive.directive';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component'
import { PowPipe } from './hisPipe/pow.pipe'


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    NewDirectiveComponent,
    BackgroundDirective,
    RenderigDirectiveDirective,
    NgSwitchComponent,
    PipesComponent,
    PowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
