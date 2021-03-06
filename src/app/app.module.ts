import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { IndicatorServices, ManageErrorService } from './services';
import { ChartsModule } from 'ng2-charts';
import { LoadingComponent } from './loading/loading.component';
import { CardComponent } from './dashboard/card/card.component';
import { DateFromNowPipe } from './pipes';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    DashboardComponent,
    ChartComponent,
    LoadingComponent,
    CardComponent,
    DateFromNowPipe,
    SnackbarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  providers: [IndicatorServices, ManageErrorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
