import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Adjust paths as necessary
import { HeroComponent } from './hero/hero.component'; // Adjust paths as necessary
import { FeaturesComponent } from './features/features.component'; // Adjust paths as necessary
import { FooterComponent } from './footer/footer.component'; // Adjust paths as necessary

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
