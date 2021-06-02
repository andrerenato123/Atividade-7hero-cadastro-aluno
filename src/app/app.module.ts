import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        EstudantesComponent,
        EstudanteDetailComponent,
        MessagesComponent,
        DashboardComponent

    ],
    
    bootstrap: [AppComponent]
})

export class AppModule { }

