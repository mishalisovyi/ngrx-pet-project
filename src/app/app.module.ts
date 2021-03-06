import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StarshipsModule } from 'src/app/starships/starships.module';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomSerializer } from 'src/app/store/serializers/router.serializer';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StarshipsModule,
    // RouterModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
