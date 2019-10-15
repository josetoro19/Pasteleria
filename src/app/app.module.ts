import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibrosAddComponent } from './componentes/libros-add/libros-add.component';
import { LibrosListComponent } from './componentes/libros-list/libros-list.component';

import { LibrosService} from './servicio/libros.service';
import { LibrosEditComponent } from './componentes/libros-edit/libros-edit.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './servicio/in-memory-data.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LibrosAddComponent,
    LibrosListComponent,
    LibrosEditComponent,
  
    
  ],
 
    
  
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [LibrosService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
