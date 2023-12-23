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
import { AddvenceSearchButtonComponent } from './search-property-bar/addvence-search-button/addvence-search-button.component';
import { SearchProprertyButtonComponent } from './search-property-bar/search-proprerty-button/search-proprerty-button.component';
import { DatabaseComponent } from './database/database.component';
import { HttpClientModule } from '@angular/common/http';
import { Yad2ApiService } from './services/yad2-api.service';
import { AsssetCardComponent } from './assset-card/assset-card.component';
import { DropDownAssetTypeComponent } from './search-property-bar/drop-down-asset-type/drop-down-asset-type.component';
import { InputFromToComponent } from './search-property-bar/input-from-to/input-from-to.component';

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
    InputPriceComponent,
    AddvenceSearchButtonComponent,
    SearchProprertyButtonComponent,
    DatabaseComponent,
    AsssetCardComponent,
    DropDownAssetTypeComponent,
    InputFromToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [Yad2ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
