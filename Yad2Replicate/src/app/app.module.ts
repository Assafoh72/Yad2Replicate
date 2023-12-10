import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignupLoginSideComponent } from './signup-login-side/signup-login-side.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-property-bar/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { MaterialComponent } from './material/material.component';
import { DropDownPropertyTypesComponent } from './search-property-bar/drop-down-property-types/drop-down-property-types.component';
import { InputWithIconComponent } from './search-property-bar/input-with-icon/input-with-icon.component';
import { InputFromToDropDownComponent } from './search-property-bar/input-from-to-drop-down/input-from-to-drop-down.component';
import { InputRoomsNumberComponent } from './search-property-bar/input-rooms-number/input-rooms-number.component';
import { InputPriceComponent } from './search-property-bar/input-price/input-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent,
    SignupLoginSideComponent,
    FooterComponent,
    SearchBarComponent,
    MaterialComponent,
    DropDownPropertyTypesComponent,
    InputWithIconComponent,
    InputFromToDropDownComponent,
    InputRoomsNumberComponent,
    InputPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
