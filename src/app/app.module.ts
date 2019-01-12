import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreNgMaterialModule } from './core/core-ng-material.module';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { TopBarComponent } from './layouts/top-bar/top-bar.component';
import { SideNavService } from './core/side-nav.service';
import { CreatorComponent } from './pages/creator/creator.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopBarComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreNgMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    SideNavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
